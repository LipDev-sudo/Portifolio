"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import {
  buildEmailTemplateParams,
  contactFormSchema,
  type ContactFormInput,
  type ContactFormValues,
} from "@/lib/contact";
import { useT } from "@/lib/i18n";

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
    if (
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY
    ) {
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
        headers: {
          "Content-Type": "application/json",
        },
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

        throw new Error(
          responseData?.message ?? t.contact.form.genericError
        );
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

  return (
    <section id="contact" className="border-t-[2.5px] border-border bg-dark text-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge badge-coral">{t.contact.badge}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 leading-tight">
              {t.contact.title}
            </h2>
            <p className="text-white/60 mt-6 text-base sm:text-lg leading-relaxed max-w-md">
              {t.contact.description}
            </p>

            <div className="flex flex-col gap-4 mt-8">
              <a
                href={WHATSAPP_ENDPOINT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-[#25D366] text-white font-bold text-sm border-[2.5px] border-border shadow-[3px_3px_0px_var(--color-border)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_var(--color-border)] transition-all w-fit"
              >
                <MessageCircle size={18} />
                {t.contact.whatsapp}
              </a>

              <a
                href="https://github.com/LipDev-sudo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-accent-lime transition-colors font-semibold"
              >
                <ArrowRight size={16} className="text-accent-lime" />
                github.com/LipDev-sudo
              </a>
              <a
                href="https://www.linkedin.com/in/hamilton-felipe-875054383/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-accent-cyan transition-colors font-semibold"
              >
                <ArrowRight size={16} className="text-accent-cyan" />
                LinkedIn - Hamilton Felipe
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 card-bold p-6 sm:p-8 bg-white text-foreground"
            >
              <div className="hidden" aria-hidden="true">
                <input
                  {...register("website")}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <input
                  {...register("name")}
                  placeholder={t.contact.form.name}
                  className="input"
                />
                {errors.name && (
                  <span className="text-accent-coral text-xs mt-1 block font-semibold">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <input
                  {...register("email")}
                  placeholder={t.contact.form.email}
                  type="email"
                  className="input"
                />
                {errors.email && (
                  <span className="text-accent-coral text-xs mt-1 block font-semibold">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div>
                <textarea
                  {...register("message")}
                  placeholder={t.contact.form.message}
                  rows={5}
                  className="input resize-none"
                />
                {errors.message && (
                  <span className="text-accent-coral text-xs mt-1 block font-semibold">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {errorMessage && (
                <div className="text-accent-coral text-sm font-semibold text-center p-3 bg-accent-coral/10 rounded-lg border-2 border-accent-coral/30">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center"
              >
                {isSubmitting ? (
                  t.contact.form.submitting
                ) : sent ? (
                  <>
                    <CheckCircle size={16} />
                    {t.contact.form.success}
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    {t.contact.form.submit}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
