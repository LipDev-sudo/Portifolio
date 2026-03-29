"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Nome muito curto"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(10, "Mensagem muito curta"),
});

type FormData = z.infer<typeof schema>;

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER!;

export function Contact() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
      EMAILJS_PUBLIC_KEY
    );
    reset();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Olá, vi seu portfólio e gostaria de solicitar um serviço."
  )}`;

  return (
    <section id="contact" className="border-t-[2.5px] border-border bg-dark text-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — CTA text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge badge-coral">Contato</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 leading-tight">
              Vamos construir algo incrível juntos?
            </h2>
            <p className="text-white/60 mt-6 text-base sm:text-lg leading-relaxed max-w-md">
              Tem um projeto em mente? Quer bater um papo sobre tech? Manda uma
              mensagem e eu respondo o mais rápido possível.
            </p>

            <div className="flex flex-col gap-4 mt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-[#25D366] text-white font-bold text-sm border-[2.5px] border-border shadow-[3px_3px_0px_var(--color-border)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_var(--color-border)] transition-all w-fit"
              >
                <MessageCircle size={18} />
                Chamar no WhatsApp
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
                LinkedIn — Hamilton Felipe
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
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
              <div>
                <input
                  {...register("name")}
                  placeholder="Seu nome"
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
                  placeholder="Seu e-mail"
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
                  placeholder="Sua mensagem"
                  rows={5}
                  className="input resize-none"
                />
                {errors.message && (
                  <span className="text-accent-coral text-xs mt-1 block font-semibold">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : sent ? (
                  <>
                    <CheckCircle size={16} />
                    Mensagem Enviada!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Enviar Mensagem
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
