"use client";

import { useState, type FormEvent } from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";

type Status = "idle" | "enviando" | "enviado";

export default function CTAFinal() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("enviando");

    // TODO: substituir pela integração real de envio (ex: API route própria
    // que dispara e-mail/webhook, ou serviço como Resend/Formspree).
    // Por enquanto o envio é apenas simulado no front-end.
    window.setTimeout(() => {
      setStatus("enviado");
      event.currentTarget.reset();
    }, 700);
  }

  return (
    <section
      id="contato"
      className="relative overflow-hidden px-6 py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand-gradient opacity-15 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold text-text-primary sm:text-4xl">
          Vamos tirar seu projeto do papel
        </h2>
        <p className="mt-5 text-balance text-base text-text-secondary sm:text-lg">
          Conta um pouco sobre o que você precisa e retornamos com os
          próximos passos — ou fale com a gente agora mesmo no WhatsApp.
        </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-xl">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-surface p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="nome"
                className="text-sm font-medium text-text-primary"
              >
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                required
                autoComplete="name"
                className="rounded-lg border border-white/15 bg-background px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus-visible:border-brand-end"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="contato"
                className="text-sm font-medium text-text-primary"
              >
                E-mail ou WhatsApp
              </label>
              <input
                id="contato"
                name="contato"
                type="text"
                required
                autoComplete="email"
                className="rounded-lg border border-white/15 bg-background px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus-visible:border-brand-end"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <label
              htmlFor="mensagem"
              className="text-sm font-medium text-text-primary"
            >
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              required
              rows={4}
              className="resize-none rounded-lg border border-white/15 bg-background px-4 py-2.5 text-sm text-text-primary outline-none transition-colors focus-visible:border-brand-end"
            />
          </div>

          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row">
            <button
              type="submit"
              disabled={status === "enviando"}
              className="w-full rounded-full bg-brand-gradient px-7 py-3.5 text-center font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-end disabled:opacity-70 motion-reduce:transition-none sm:w-auto"
            >
              {status === "enviando" ? "Enviando..." : "Enviar mensagem"}
            </button>

            <a
              href={getWhatsAppLink(
                "Olá! Quero pedir um orçamento com a Azuos Dev.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-medium text-text-primary transition-colors hover:border-brand-end/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-end sm:w-auto"
            >
              Falar no WhatsApp
            </a>
          </div>

          <p role="status" aria-live="polite" className="mt-4 text-sm text-brand-end">
            {status === "enviado" &&
              "Mensagem enviada! Vamos te responder em breve."}
          </p>
        </form>
      </div>
    </section>
  );
}
