"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_EMAIL } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Icon, WhatsAppIcon } from "./Icon";

type Status = "idle" | "enviando" | "enviado" | "erro";

const LIMITE = 1500;

const campo =
  "w-full rounded-xl border border-line bg-paper/60 px-4 py-3.5 text-[15px] text-ink placeholder:text-muted transition-[border-color,box-shadow] duration-200 hover:border-accent/40 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/15";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [tamanho, setTamanho] = useState(0);

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
      setTamanho(0);
      form.reset();
    } catch {
      setStatus("erro");
    }
  }

  return (
    <div
      id="contato"
      className="relative rounded-[28px] border border-line bg-surface/90 p-6 shadow-[0_30px_80px_-40px_rgb(0_0_0/0.6)] backdrop-blur-sm sm:p-8"
    >
      <h2 className="heading text-[1.75rem] sm:text-[2.1rem]">
        Conte o que você precisa.
      </h2>
      <p className="mt-2 text-[15px] text-body">
        Retornamos com os próximos passos. Algumas linhas já bastam.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="nome" className="flex justify-between text-sm font-semibold text-ink">
              Nome
              <span className="font-normal text-muted">obrigatório</span>
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              required
              autoComplete="name"
              placeholder="Como podemos te chamar?"
              className={campo}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email-whatsapp"
              className="flex justify-between text-sm font-semibold text-ink"
            >
              E-mail ou WhatsApp
              <span className="font-normal text-muted">obrigatório</span>
            </label>
            <input
              id="email-whatsapp"
              name="contato"
              type="text"
              required
              autoComplete="email"
              placeholder="voce@empresa.com.br"
              className={campo}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="mensagem" className="text-sm font-semibold text-ink">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            required
            rows={4}
            maxLength={LIMITE}
            placeholder="Quero automatizar…"
            onChange={(event) => setTamanho(event.target.value.length)}
            className={`${campo} resize-none`}
          />
          <p className="flex justify-between text-xs text-muted">
            <span>Conte o processo e o que ele trava hoje.</span>
            <span className="tabular-nums">
              {tamanho} / {LIMITE.toLocaleString("pt-BR")}
            </span>
          </p>
        </div>

        <button
          type="submit"
          disabled={status === "enviando"}
          className="btn-signal focus-ring group relative flex w-full items-center justify-center rounded-2xl px-14 py-4 text-base font-semibold transition-[transform,filter] duration-300 ease-out-expo hover:-translate-y-0.5 hover:brightness-105 disabled:cursor-wait disabled:opacity-70"
        >
          <Icon name="mail" className="absolute left-5 h-5 w-5 opacity-70" />
          {status === "enviando" ? "Enviando…" : "Enviar mensagem"}
          <span className="absolute right-3 flex h-9 w-9 items-center justify-center rounded-full bg-on-signal/10 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5">
            <Icon name="arrowRight" className="h-4 w-4" />
          </span>
        </button>

        <p
          role="status"
          aria-live="polite"
          className={`min-h-5 text-center text-sm ${status === "erro" ? "text-red-500" : "text-accent"}`}
        >
          {status === "enviado" && "Mensagem enviada! Vamos te responder em breve."}
          {status === "erro" &&
            "Não foi possível enviar agora. Tente de novo ou fale no WhatsApp."}
        </p>
      </form>

      <div className="mt-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-line pt-5 text-sm">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="focus-ring rounded font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
        >
          Direto por e-mail
        </a>
        <a
          href={getWhatsAppLink("Olá! Quero pedir um orçamento com a Azuos Dev.")}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring flex items-center gap-2 rounded font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
        >
          <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
          Ou pelo WhatsApp
        </a>
      </div>
    </div>
  );
}
