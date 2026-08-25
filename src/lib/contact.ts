import { z } from "zod";
import type { Language } from "./translations";

export const DEFAULT_WHATSAPP_TEXT =
  "Olá, vi seu portfólio e gostaria de solicitar um serviço.";

const validationMessages = {
  pt: {
    nameShort: "Nome muito curto",
    nameLong: "Nome muito longo",
    emailInvalid: "E-mail inválido",
    emailLong: "E-mail muito longo",
    messageShort: "Mensagem muito curta",
    messageLong: "Mensagem muito longa",
    fieldInvalid: "Campo inválido",
  },
  en: {
    nameShort: "Name is too short",
    nameLong: "Name is too long",
    emailInvalid: "Invalid email address",
    emailLong: "Email address is too long",
    messageShort: "Message is too short",
    messageLong: "Message is too long",
    fieldInvalid: "Invalid field",
  },
} as const;

export function getContactFormSchema(language: Language = "pt") {
  const validation = validationMessages[language];

  return z.object({
    name: z
      .string()
      .trim()
      .min(2, validation.nameShort)
      .max(80, validation.nameLong),
    email: z
      .string()
      .trim()
      .email(validation.emailInvalid)
      .max(120, validation.emailLong),
    message: z
      .string()
      .trim()
      .min(10, validation.messageShort)
      .max(2000, validation.messageLong),
    website: z
      .string()
      .trim()
      .max(200, validation.fieldInvalid)
      .optional()
      .default(""),
  });
}

export const contactFormSchema = getContactFormSchema("pt");

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

export function buildEmailTemplateParams(data: ContactFormValues) {
  return {
    from_name: data.name,
    from_email: data.email,
    reply_to: data.email,
    message: data.message,
    name: data.name,
    email: data.email,
    user_name: data.name,
    user_email: data.email,
    contact_name: data.name,
    contact_email: data.email,
    contact_message: data.message,
    submitted_at: new Date().toISOString(),
    source: "lipdev-portfolio",
  };
}
