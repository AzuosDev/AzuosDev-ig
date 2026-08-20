import type { ReactNode } from "react";

type Diferencial = {
  titulo: string;
  descricao: string;
  icon: ReactNode;
};

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-6 w-6",
  "aria-hidden": true,
};

const diferenciais: Diferencial[] = [
  {
    titulo: "Prazo de entrega",
    descricao:
      "Cronograma definido já no orçamento, com marcos por etapa — você acompanha o progresso do sistema, não fica esperando um 'pronto' do nada.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    titulo: "Suporte pós-entrega",
    descricao:
      "Sistema entregue passa por um período de garantia com correções incluídas. Ajuste pontual depois do lançamento não vira orçamento novo.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    titulo: "Tecnologia utilizada",
    descricao:
      "Stack moderna e amplamente adotada no mercado — React, Node.js, bancos como MongoDB — nada de tecnologia obscura que te deixa refém de um único desenvolvedor.",
    icon: (
      <svg {...iconProps}>
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
  },
  {
    titulo: "Processo de trabalho transparente",
    descricao:
      "Você acompanha cada etapa do desenvolvimento, sem caixa-preta: o que já foi feito, o que falta e o que precisa de decisão sua fica sempre visível.",
    icon: (
      <svg {...iconProps}>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold text-text-primary sm:text-4xl">
          Por que escolher a Azuos Dev
        </h2>
        <p className="mt-5 text-balance text-base text-text-secondary sm:text-lg">
          Sem enrolação: é assim, na prática, que cada projeto é conduzido do
          início ao fim.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
        {diferenciais.map((item) => (
          <div
            key={item.titulo}
            className="flex gap-4 rounded-2xl border border-white/10 bg-surface p-6"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-start/10 text-brand-end">
              {item.icon}
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-text-primary">
                {item.titulo}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {item.descricao}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
