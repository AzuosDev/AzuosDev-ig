"use client";

import { useState } from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Icon, WhatsAppIcon } from "@/components/ui/Icon";

type Pergunta = {
  pergunta: string;
  resposta: string;
};

const perguntas: Pergunta[] = [
  {
    pergunta: "Qual o prazo médio de entrega de um projeto?",
    resposta:
      "Varia com o escopo: uma landing page costuma sair em 1-2 semanas, sites institucionais em 2-4 semanas e sistemas sob medida entre 4-12 semanas. O prazo exato é combinado no orçamento, com marcos por etapa.",
  },
  {
    pergunta: "Como funciona a forma de pagamento?",
    resposta:
      "O pagamento é dividido por etapa do projeto (ex: entrada, meio e entrega final), nunca 100% adiantado. As condições exatas são fechadas junto com o orçamento, antes de começar o desenvolvimento.",
  },
  {
    pergunta: "Vocês oferecem suporte depois da entrega?",
    resposta:
      "Sim. Todo projeto sai com um período de garantia incluso, cobrindo correções de bugs. Ajustes ou novas funcionalidades depois desse período podem ser contratados à parte.",
  },
  {
    pergunta: "Existe garantia sobre o sistema entregue?",
    resposta:
      "Sim. Durante o período de garantia, qualquer erro identificado no que foi combinado no escopo é corrigido sem custo adicional.",
  },
  {
    pergunta: "Como funciona o processo do orçamento?",
    resposta:
      "Você conta o que precisa, entendemos o problema e o processo por trás dele, e devolvemos um orçamento com escopo, prazo e valor definidos — sem letra miúda escondida depois.",
  },
];

function ArteDuvida() {
  return (
    <div aria-hidden className="relative mx-auto h-48 w-64">
      <div className="absolute left-4 top-4 flex h-28 w-28 -rotate-6 items-center justify-center rounded-[28px] rounded-bl-lg bg-gradient-to-br from-signal to-signal-2 font-display text-6xl font-bold text-on-signal shadow-[0_30px_50px_-20px_rgb(var(--signal-2)/0.8)]">
        ?
      </div>
      <div className="absolute bottom-6 right-4 flex h-20 w-32 rotate-3 items-center justify-center gap-2 rounded-[22px] rounded-br-md border border-line bg-surface shadow-[0_24px_40px_-20px_rgb(0_0_0/0.6)]">
        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/40" />
      </div>
      <span className="absolute bottom-2 left-16 rounded-full border border-line bg-paper px-3 py-1 text-xs font-semibold text-ink">
        Pode perguntar.
      </span>
    </div>
  );
}

export default function FAQ() {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-titulo" className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto grid max-w-page gap-3 rounded-[32px] border border-line bg-paper-2 p-3 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="stage relative flex flex-col overflow-hidden rounded-[24px] border border-line p-7 sm:p-10">
          <div className="dot-grid absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,transparent,black)]" />
          <div className="relative">
            <h2 id="faq-titulo" className="heading text-[2.4rem] sm:text-5xl">
              Perguntas frequentes.
              <span className="block text-accent">Antes de fechar.</span>
            </h2>
            <p className="mt-5 max-w-[40ch] text-base leading-relaxed text-body">
              O que a gente mais escuta antes de fechar um projeto.
            </p>
          </div>
          <div className="relative my-10 lg:my-auto lg:py-10">
            <ArteDuvida />
          </div>
          <a
            href={getWhatsAppLink("Olá! Tenho uma dúvida sobre um projeto com a Azuos Dev.")}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring group relative flex items-center justify-between gap-4 rounded-2xl border-t border-line pt-5"
          >
            <span>
              <span className="block text-[15px] font-semibold text-ink">Ficou alguma dúvida?</span>
              <span className="block text-sm text-body">Pergunte direto no WhatsApp.</span>
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-[#25D366] transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
          </a>
        </div>

        <div className="flex flex-col justify-center rounded-[24px] p-2 sm:p-4">
          {perguntas.map((item, index) => {
            const isOpen = aberto === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={item.pergunta}
                className={`rounded-2xl transition-colors duration-300 ${
                  isOpen ? "bg-surface" : ""
                } ${index > 0 && !isOpen && aberto !== index - 1 ? "border-t border-line" : "border-t border-transparent"}`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setAberto(isOpen ? null : index)}
                    className={`focus-ring flex w-full items-center justify-between gap-5 rounded-2xl px-4 py-6 text-left font-display text-lg font-semibold tracking-[-0.02em] transition-colors sm:px-6 sm:text-xl ${
                      isOpen ? "text-accent" : "text-ink hover:text-accent"
                    }`}
                  >
                    {item.pergunta}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                        isOpen ? "bg-accent text-on-signal" : "bg-surface-2 text-ink"
                      }`}
                    >
                      <Icon name={isOpen ? "minus" : "plus"} className="h-4 w-4" strokeWidth={2} />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="max-w-[68ch] px-4 pb-6 text-[15px] leading-relaxed text-body sm:px-6"
                >
                  {item.resposta}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
