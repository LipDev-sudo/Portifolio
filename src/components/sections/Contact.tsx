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
import Image from "next/image";

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
    <section id="contact" className="relative">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge">{t.contact.badge}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
              {t.contact.title}
            </h2>
            <p className="text-white/40 mt-6 text-base sm:text-lg leading-relaxed max-w-md">
              {t.contact.description}
            </p>

            <div className="flex flex-col gap-4 mt-8">
              <a
                href={WHATSAPP_ENDPOINT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all duration-300 w-fit"
              >
                <MessageCircle size={17} />
                {t.contact.whatsapp}
              </a>

              <a
                href="https://github.com/LipDev-sudo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/40 hover:text-primary transition-colors duration-300 font-medium text-sm"
              >
                <ArrowRight size={14} className="text-primary" />
                github.com/LipDev-sudo
              </a>
              <a
                href="https://www.linkedin.com/in/hamilton-felipe-875054383/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/40 hover:text-primary transition-colors duration-300 font-medium text-sm"
              >
                <ArrowRight size={14} className="text-primary" />
                LinkedIn - Hamilton Felipe
              </a>
            </div>

            {/* Instagram QR */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden border border-white/[0.06] bg-white p-1">
                <Image
                  src="/images/instagram-qr.png"
                  alt="Instagram @lip.devbr"
                  width={72}
                  height={72}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="text-xs text-white/40 font-medium">Instagram</p>
                <p className="text-sm font-semibold text-white">@lip.devbr</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 card-bold p-6 sm:p-8"
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
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-primary/40 focus:shadow-[0_0_15px_rgba(74,222,128,0.1)] transition-all duration-300"
                />
                {errors.name && (
                  <span className="text-red-400 text-xs mt-1 block font-medium">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <input
                  {...register("email")}
                  placeholder={t.contact.form.email}
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-primary/40 focus:shadow-[0_0_15px_rgba(74,222,128,0.1)] transition-all duration-300"
                />
                {errors.email && (
                  <span className="text-red-400 text-xs mt-1 block font-medium">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div>
                <textarea
                  {...register("message")}
                  placeholder={t.contact.form.message}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-primary/40 focus:shadow-[0_0_15px_rgba(74,222,128,0.1)] transition-all duration-300 resize-none"
                />
                {errors.message && (
                  <span className="text-red-400 text-xs mt-1 block font-medium">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {errorMessage && (
                <div className="text-red-400 text-sm font-medium text-center p-3 bg-red-500/10 rounded-lg border border-red-500/20">
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
      </div>
    </section>
  );
}
