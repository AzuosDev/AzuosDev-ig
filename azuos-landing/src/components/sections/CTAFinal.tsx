"use client";

import { useState, type FormEvent } from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";

type Status = "idle" | "enviando" | "enviado" | "erro";

export default function CTAFinal() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("enviando");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Falha no envio");

      setStatus("enviado");
      form.reset();
    } catch {
      setStatus("erro");
    }
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
                className="rounded-lg border border-white/15 bg-background px-4 py-2.5 text-sm text-text-primary transition-colors focus:border-brand-end focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-brand-end"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email-whatsapp"
                className="text-sm font-medium text-text-primary"
              >
                E-mail ou WhatsApp
              </label>
              <input
                id="email-whatsapp"
                name="contato"
                type="text"
                required
                autoComplete="email"
                className="rounded-lg border border-white/15 bg-background px-4 py-2.5 text-sm text-text-primary transition-colors focus:border-brand-end focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-brand-end"
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
              className="resize-none rounded-lg border border-white/15 bg-background px-4 py-2.5 text-sm text-text-primary transition-colors focus:border-brand-end focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-brand-end"
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

          <p
            role="status"
            aria-live="polite"
            className={`mt-4 text-sm ${status === "erro" ? "text-red-400" : "text-brand-end"}`}
          >
            {status === "enviado" &&
              "Mensagem enviada! Vamos te responder em breve."}
            {status === "erro" &&
              "Não foi possível enviar agora. Tente de novo ou fale no WhatsApp."}
          </p>
        </form>
      </div>
    </section>
  );
}
