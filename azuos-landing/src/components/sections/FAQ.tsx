"use client";

import { useState } from "react";

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

export default function FAQ() {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <section id="faq" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold text-text-primary sm:text-4xl">
          Perguntas frequentes
        </h2>
        <p className="mt-5 text-balance text-base text-text-secondary sm:text-lg">
          O que a gente mais escuta antes de fechar um projeto.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-2xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-surface">
        {perguntas.map((item, index) => {
          const isOpen = aberto === index;
          const panelId = `faq-panel-${index}`;
          const buttonId = `faq-button-${index}`;

          return (
            <div key={item.pergunta}>
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setAberto(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-base font-semibold text-text-primary transition-colors hover:text-brand-end focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-end sm:text-lg"
                >
                  {item.pergunta}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-5 w-5 shrink-0 text-text-secondary transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="px-6 pb-5 text-sm text-text-secondary sm:text-base"
              >
                {item.resposta}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
