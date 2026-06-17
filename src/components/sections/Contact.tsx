"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send, CheckCircle, MessageCircle } from "lucide-react";
import {
  buildEmailTemplateParams,
  contactFormSchema,
  type ContactFormInput,
  type ContactFormValues,
} from "@/lib/contact";
import { useT } from "@/lib/i18n";
import Image from "next/image";

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

  return (
    <section id="contact" className="border-t border-white/[0.06] bg-secondary">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — CTA */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="badge badge-coral">{t.contact.badge}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5 leading-tight text-white">
              {t.contact.title}
            </h2>
            <p className="text-white/40 mt-6 text-base sm:text-lg leading-relaxed max-w-md">
              {t.contact.description}
            </p>

            <div className="flex flex-col gap-4 mt-10">
              <a
                href={WHATSAPP_ENDPOINT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-bold text-sm hover:bg-[#25D366]/18 hover:border-[#25D366]/40 transition-all w-fit"
              >
                <MessageCircle size={17} />
                {t.contact.whatsapp}
              </a>

              <a
                href="https://github.com/LipDev-sudo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/40 hover:text-white/80 transition-colors font-semibold text-sm"
              >
                <span className="text-white/30"><GithubIcon /></span>
                github.com/LipDev-sudo
              </a>

              <a
                href="https://www.linkedin.com/in/hamilton-felipe-875054383/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/40 hover:text-white/80 transition-colors font-semibold text-sm"
              >
                <span className="text-white/30"><LinkedinIcon /></span>
                LinkedIn — Hamilton Felipe
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

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-primary/45 focus:shadow-[0_0_15px_rgba(212,185,141,0.08)] transition-all duration-300"
                />
                {errors.name && (
                  <span className="text-accent-coral text-xs mt-1.5 block font-semibold">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <input
                  {...register("email")}
                  placeholder={t.contact.form.email}
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-primary/45 focus:shadow-[0_0_15px_rgba(212,185,141,0.08)] transition-all duration-300"
                />
                {errors.email && (
                  <span className="text-accent-coral text-xs mt-1.5 block font-semibold">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div>
                <textarea
                  {...register("message")}
                  placeholder={t.contact.form.message}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-primary/45 focus:shadow-[0_0_15px_rgba(212,185,141,0.08)] transition-all duration-300 resize-none"
                />
                {errors.message && (
                  <span className="text-accent-coral text-xs mt-1.5 block font-semibold">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {errorMessage && (
                <div className="text-accent-coral text-sm font-medium text-center p-3 bg-accent-coral/10 rounded-lg border border-accent-coral/20">
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
