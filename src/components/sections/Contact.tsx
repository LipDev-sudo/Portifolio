"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { CheckCircle, Mail, MessageCircle, Send } from "lucide-react";
import {
  buildEmailTemplateParams,
  contactFormSchema,
  type ContactFormInput,
  type ContactFormValues,
} from "@/lib/contact";
import { useT } from "@/lib/i18n";

function GithubIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

const CONTACT_ENDPOINT = "/api/contact";
const WHATSAPP_ENDPOINT = "/api/contact/whatsapp";
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type ContactApiResponse = {
  ok?: boolean;
  message?: string;
};

export function Contact() {
  const t = useT();
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput, unknown, ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      website: "",
    },
  });

  async function sendWithBrowserFallback(data: ContactFormValues) {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      throw new Error(t.contact.form.notConfigured);
    }

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      buildEmailTemplateParams(data),
      {
        publicKey: EMAILJS_PUBLIC_KEY,
        blockHeadless: true,
        limitRate: {
          id: "lipdev-contact-form",
          throttle: 60_000,
        },
      }
    );
  }

  async function onSubmit(data: ContactFormValues) {
    try {
      setErrorMessage(null);

      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      let responseData: ContactApiResponse | null = null;
      try {
        responseData = (await response.json()) as ContactApiResponse;
      } catch {
        responseData = null;
      }

      if (!response.ok || !responseData?.ok) {
        if (
          (response.status === 502 || response.status === 503) &&
          EMAILJS_SERVICE_ID &&
          EMAILJS_TEMPLATE_ID &&
          EMAILJS_PUBLIC_KEY
        ) {
          await sendWithBrowserFallback(data);
          reset();
          setSent(true);
          setTimeout(() => setSent(false), 4000);
          return;
        }

        throw new Error(responseData?.message ?? t.contact.form.genericError);
      }

      reset();
      setSent(true);
      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : t.contact.form.genericError;
      setSent(false);
      setErrorMessage(message);
      setTimeout(() => setErrorMessage(null), 5000);
    }
  }

  const inputClass =
    "w-full rounded-none border border-black/20 bg-white px-4 py-3 text-sm font-semibold text-black placeholder:text-black/35 outline-none transition-colors focus:border-black dark:border-white/20 dark:bg-[#202225] dark:text-[#f4f4f2] dark:placeholder:text-[#777b82] dark:focus:border-white/60";

  return (
    <section id="contact" className="border-t border-black/10 bg-white py-24 text-black transition-colors dark:border-white/10 dark:bg-[#161719] dark:text-[#f4f4f2] sm:py-28">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}>
          <span className="inline-flex rounded-full border border-black/15 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.12em] dark:border-white/20">
            {t.contact.badge}
          </span>
          <h2 className="mt-5 max-w-[540px] text-[2.35rem] font-black leading-[1.02] tracking-[-0.055em] sm:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-6 max-w-[470px] text-sm leading-7 text-black/58 dark:text-[#afb1b5] sm:text-base">
            {t.contact.description}
          </p>

          <div className="mt-10 grid gap-3">
            <a
              href={WHATSAPP_ENDPOINT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-black bg-black px-5 py-3 text-xs font-black uppercase tracking-[0.08em] text-white transition-opacity hover:opacity-75 dark:border-[#f4f4f2] dark:bg-[#f4f4f2] dark:text-[#161719]"
            >
              <MessageCircle size={15} />
              {t.contact.whatsapp}
            </a>

            <a
              href="mailto:hamiltonfelipe019@gmail.com"
              className="flex w-fit items-center gap-3 text-sm font-bold text-black/60 transition-colors hover:text-black dark:text-[#afb1b5] dark:hover:text-[#f4f4f2]"
            >
              <Mail size={16} />
              hamiltonfelipe019@gmail.com
            </a>

            <a
              href="https://github.com/LipDev-sudo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-3 text-sm font-bold text-black/60 transition-colors hover:text-black dark:text-[#afb1b5] dark:hover:text-[#f4f4f2]"
            >
              <GithubIcon />
              github.com/LipDev-sudo
            </a>

            <a
              href="https://www.linkedin.com/in/hamilton-felipe-875054383/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-3 text-sm font-bold text-black/60 transition-colors hover:text-black dark:text-[#afb1b5] dark:hover:text-[#f4f4f2]"
            >
              <LinkedinIcon />
              LinkedIn - Hamilton Felipe
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 border border-black p-3 dark:border-white/20 dark:bg-[#202225]">
            <div className="h-20 w-20 shrink-0 bg-white">
              <Image
                src="/images/instagram-qr.png"
                alt="Instagram @lip.devbr"
                width={80}
                height={80}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.12em] text-black/40 dark:text-[#777b82]">Instagram</p>
              <p className="mt-1 text-sm font-black text-black dark:text-[#f4f4f2]">@lip.devbr</p>
            </div>
          </div>
        </motion.div>

        <motion.div transition={{ delay: 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 border border-black p-5 dark:border-white/20 dark:bg-[#202225] sm:p-7"
          >
            <div className="hidden" aria-hidden="true">
              <input {...register("website")} tabIndex={-1} autoComplete="off" />
            </div>

            <div>
              <input {...register("name")} placeholder={t.contact.form.name} className={inputClass} />
              {errors.name && (
                <span className="mt-1.5 block text-xs font-semibold text-red-600">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div>
              <input
                {...register("email")}
                placeholder={t.contact.form.email}
                type="email"
                className={inputClass}
              />
              {errors.email && (
                <span className="mt-1.5 block text-xs font-semibold text-red-600">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <textarea
                {...register("message")}
                placeholder={t.contact.form.message}
                rows={6}
                className={`${inputClass} resize-none`}
              />
              {errors.message && (
                <span className="mt-1.5 block text-xs font-semibold text-red-600">
                  {errors.message.message}
                </span>
              )}
            </div>

            {errorMessage && (
              <div className="border border-red-600/30 bg-red-50 p-3 text-center text-sm font-semibold text-red-700 dark:bg-red-950/25 dark:text-red-300">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-black px-5 text-xs font-black uppercase tracking-[0.08em] text-white transition-opacity hover:opacity-75 disabled:opacity-40 dark:bg-[#f4f4f2] dark:text-[#161719]"
            >
              {isSubmitting ? (
                t.contact.form.submitting
              ) : sent ? (
                <>
                  <CheckCircle size={15} />
                  {t.contact.form.success}
                </>
              ) : (
                <>
                  <Send size={15} />
                  {t.contact.form.submit}
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
