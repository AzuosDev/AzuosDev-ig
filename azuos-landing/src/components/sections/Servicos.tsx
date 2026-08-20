import type { ReactNode } from "react";

type Servico = {
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

const servicos: Servico[] = [
  {
    titulo: "Sistemas Sob Medida",
    descricao:
      "Sistemas web e painéis administrativos construídos para o processo real da sua empresa, não para um template genérico.",
    icon: (
      <svg {...iconProps}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    titulo: "Automação de Processos",
    descricao:
      "Tarefas manuais e repetitivas substituídas por rotinas que rodam sozinhas, sem depender de alguém lembrar de fazer.",
    icon: (
      <svg {...iconProps}>
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
  },
  {
    titulo: "Landing Pages e Sites Institucionais",
    descricao:
      "Páginas rápidas, responsivas e otimizadas para SEO, pensadas para converter visitante em contato.",
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    titulo: "Integrações e APIs",
    descricao:
      "Conexão entre sistemas, planilhas e ferramentas que você já usa, para os dados fluírem sem retrabalho manual.",
    icon: (
      <svg {...iconProps}>
        <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
  },
  {
    titulo: "Painéis e Dashboards",
    descricao:
      "Visualização de dados e indicadores em tempo real, para decisões rápidas baseadas em número, não em achismo.",
    icon: (
      <svg {...iconProps}>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    titulo: "Manutenção e Evolução",
    descricao:
      "Suporte contínuo, correções e novas funcionalidades sobre sistemas que já estão em produção.",
    icon: (
      <svg {...iconProps}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold text-text-primary sm:text-4xl">
          O que fazemos
        </h2>
        <p className="mt-5 text-balance text-base text-text-secondary sm:text-lg">
          Da automação de um processo específico ao sistema completo — cada
          serviço é entregue sob medida para o seu negócio.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicos.map((servico) => (
          <div
            key={servico.titulo}
            className="rounded-2xl border border-white/10 bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-end/40 hover:shadow-[0_16px_32px_-20px_rgba(124,58,237,0.6)]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-start/10 text-brand-end">
              {servico.icon}
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-text-primary">
              {servico.titulo}
            </h3>
            <p className="mt-2 text-sm text-text-secondary">
              {servico.descricao}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
