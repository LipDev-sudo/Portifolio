import { NextRequest, NextResponse } from "next/server";
import {
  buildEmailTemplateParams,
  contactFormSchema,
  getEmailJsConfig,
  type ContactFormValues,
} from "@/lib/contact";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 3;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

declare global {
  var __lipdevContactRateLimit: Map<string, RateLimitEntry> | undefined;
}

function getRateLimitStore() {
  if (!globalThis.__lipdevContactRateLimit) {
    globalThis.__lipdevContactRateLimit = new Map<string, RateLimitEntry>();
  }

  return globalThis.__lipdevContactRateLimit;
}

function createJsonHeaders(extraHeaders?: Record<string, string>) {
  return {
    "Cache-Control": "no-store",
    ...extraHeaders,
  };
}

function getClientKey(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const firstForwardedIp = forwardedFor?.split(",")[0]?.trim();

  return firstForwardedIp || realIp || "anonymous";
}

function isAllowedOrigin(request: NextRequest) {
  const originHeader = request.headers.get("origin");

  if (!originHeader) {
    return true;
  }

  return originHeader === request.nextUrl.origin;
}

function checkRateLimit(clientKey: string) {
  const store = getRateLimitStore();
  const now = Date.now();
  const currentEntry = store.get(clientKey);

  if (!currentEntry || currentEntry.resetAt <= now) {
    store.set(clientKey, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });

    return null;
  }

  if (currentEntry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return Math.ceil((currentEntry.resetAt - now) / 1000);
  }

  currentEntry.count += 1;
  store.set(clientKey, currentEntry);

  return null;
}

function buildEmailPayload(data: ContactFormValues) {
  const config = getEmailJsConfig();

  // EmailJS strict mode on server-side requires the account private key
  // (`accessToken`). If it is not configured, the client-side fallback
  // should handle the submission instead.
  if (!config?.accessToken) {
    return null;
  }

  return {
    url: "https://api.emailjs.com/api/v1.0/email/send",
    body: {
      service_id: config.serviceId,
      template_id: config.templateId,
      user_id: config.publicKey,
      ...(config.accessToken ? { accessToken: config.accessToken } : {}),
      template_params: buildEmailTemplateParams(data),
    },
  };
}

function buildEmailJsHeaders(request: NextRequest) {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const userAgent = request.headers.get("user-agent");

  return {
    "Content-Type": "application/json",
    ...(origin ? { Origin: origin } : {}),
    ...(referer ? { Referer: referer } : {}),
    ...(userAgent ? { "User-Agent": userAgent } : {}),
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
  };
}

export async function POST(request: NextRequest) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json(
      {
        ok: false,
        message: "Origem da requisição não autorizada.",
      },
      {
        status: 403,
        headers: createJsonHeaders(),
      }
    );
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Dados inválidos. Atualize a página e tente novamente.",
      },
      {
        status: 400,
        headers: createJsonHeaders(),
      }
    );
  }

  const parsedPayload = contactFormSchema.safeParse(payload);

  if (!parsedPayload.success) {
    const firstIssue = parsedPayload.error.issues[0];

    return NextResponse.json(
      {
        ok: false,
        message: firstIssue?.message ?? "Preencha os campos corretamente.",
      },
      {
        status: 400,
        headers: createJsonHeaders(),
      }
    );
  }

  const formData = parsedPayload.data;

  if (formData.website) {
    return NextResponse.json(
      {
        ok: true,
        message: "Mensagem recebida com sucesso.",
      },
      {
        status: 200,
        headers: createJsonHeaders(),
      }
    );
  }

  const retryAfter = checkRateLimit(getClientKey(request));

  if (retryAfter !== null) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Muitas tentativas em pouco tempo. Aguarde um minuto e tente novamente.",
      },
      {
        status: 429,
        headers: createJsonHeaders({
          "Retry-After": String(retryAfter),
        }),
      }
    );
  }

  const emailRequest = buildEmailPayload(formData);

  if (!emailRequest) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "O formulário de contato não está configurado no momento. Use o WhatsApp por enquanto.",
      },
      {
        status: 503,
        headers: createJsonHeaders(),
      }
    );
  }

  try {
    const emailResponse = await fetch(emailRequest.url, {
      method: "POST",
      headers: buildEmailJsHeaders(request),
      body: JSON.stringify(emailRequest.body),
      cache: "no-store",
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();

      console.error("EmailJS error:", emailResponse.status, errorText);

      return NextResponse.json(
        {
          ok: false,
          message:
            "Não foi possível enviar sua mensagem agora. Tente novamente ou use o WhatsApp.",
        },
        {
          status: 502,
          headers: createJsonHeaders(),
        }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message: "Mensagem enviada com sucesso.",
      },
      {
        status: 200,
        headers: createJsonHeaders(),
      }
    );
  } catch (error) {
    console.error("Contact API unexpected error:", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          "Ocorreu um erro inesperado ao enviar sua mensagem. Tente novamente em instantes.",
      },
      {
        status: 500,
        headers: createJsonHeaders(),
      }
    );
  }
}
