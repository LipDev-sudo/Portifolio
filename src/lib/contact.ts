import { z } from "zod";

export const DEFAULT_WHATSAPP_TEXT =
  "Olá, vi seu portfólio e gostaria de solicitar um serviço.";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Nome muito curto")
    .max(80, "Nome muito longo"),
  email: z
    .string()
    .trim()
    .email("E-mail inválido")
    .max(120, "E-mail muito longo"),
  message: z
    .string()
    .trim()
    .min(10, "Mensagem muito curta")
    .max(2000, "Mensagem muito longa"),
  website: z.string().trim().max(200, "Campo inválido").optional().default(""),
});

export type ContactFormInput = z.input<typeof contactFormSchema>;
export type ContactFormValues = z.output<typeof contactFormSchema>;

type EmailJsConfig = {
  publicKey: string;
  serviceId: string;
  templateId: string;
  accessToken?: string;
};

function readEnvValue(names: string[]) {
  for (const name of names) {
    const value = process.env[name]?.trim();

    if (value) {
      return value;
    }
  }

  return undefined;
}

export function getEmailJsConfig(): EmailJsConfig | null {
  const publicKey = readEnvValue([
    "EMAILJS_PUBLIC_KEY",
    "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY",
  ]);
  const serviceId = readEnvValue([
    "EMAILJS_SERVICE_ID",
    "NEXT_PUBLIC_EMAILJS_SERVICE_ID",
  ]);
  const templateId = readEnvValue([
    "EMAILJS_TEMPLATE_ID",
    "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID",
  ]);
  const accessToken = readEnvValue(["EMAILJS_ACCESS_TOKEN"]);

  if (!publicKey || !serviceId || !templateId) {
    return null;
  }

  return {
    publicKey,
    serviceId,
    templateId,
    accessToken,
  };
}

export function sanitizeWhatsAppNumber(rawValue?: string | null) {
  if (!rawValue) {
    return null;
  }

  const digitsOnly = rawValue.replace(/\D/g, "");

  if (digitsOnly.length < 10 || digitsOnly.length > 15) {
    return null;
  }

  return digitsOnly;
}

export function getWhatsAppUrl(message = DEFAULT_WHATSAPP_TEXT) {
  const number = sanitizeWhatsAppNumber(
    readEnvValue(["WHATSAPP_NUMBER", "NEXT_PUBLIC_WHATSAPP_NUMBER"])
  );

  if (!number) {
    return null;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
