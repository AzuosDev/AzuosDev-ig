import type { ReactNode } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Icon, WhatsAppIcon, type IconName } from "@/components/ui/Icon";
import { Frame } from "@/components/ui/Illustrations";

function ArteSistema() {
  return (
    <Frame className="h-64 sm:h-72">
      <div className="absolute inset-x-6 top-7 flex overflow-hidden rounded-xl border border-line bg-paper shadow-[0_30px_60px_-30px_rgb(0_0_0/0.7)] sm:inset-x-10">
        <div className="hidden w-32 shrink-0 space-y-2.5 border-r border-line bg-surface-2 p-3 sm:block">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-4 w-4 rounded-md bg-accent" />
            <span className="text-[11px] font-semibold text-ink">Gestão</span>
          </div>
          {["Painel", "Pedidos", "Clientes", "Relatórios"].map((item, i) => (
            <span
              key={item}
              className={`block rounded-md px-2 py-1 text-[10px] ${
                i === 1 ? "bg-accent/15 font-semibold text-accent" : "text-muted"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex-1 p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-ink">Pedidos</span>
            <span className="rounded-md bg-accent px-2 py-1 text-[10px] font-semibold text-on-signal">
              + Novo
            </span>
          </div>
          <div className="mt-3 divide-y divide-line rounded-lg border border-line">
            {[
              ["#1042", "Loja Centro", "Em produção", true],
              ["#1041", "Barbearia Norte", "Entregue", false],
              ["#1040", "Ótica Sol", "Entregue", false],
              ["#1039", "Padaria Luz", "Aguardando", false],
            ].map(([id, cliente, estado, destaque]) => (
              <div key={id as string} className="flex items-center justify-between px-3 py-2 text-[10px]">
                <span className="font-medium tabular-nums text-ink">{id}</span>
                <span className="hidden flex-1 px-3 text-body sm:block">{cliente}</span>
                <span
                  className={`rounded-full px-2 py-0.5 ${
                    destaque ? "bg-accent/15 font-semibold text-accent" : "bg-surface-2 text-muted"
                  }`}
                >
                  {estado}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

function ArteAutomacao() {
  const rotinas = [
    ["Relatório diário", "todo dia, 08:00", true],
    ["Cobrança de vencidos", "toda segunda", true],
    ["Backup da planilha", "a cada hora", false],
  ] as const;
  return (
    <Frame className="h-64 sm:h-72">
      <div className="absolute inset-x-6 top-7 space-y-2.5 sm:inset-x-10">
        {rotinas.map(([nome, quando, ligada]) => (
          <div
            key={nome}
            className="flex items-center gap-3 rounded-xl border border-line bg-paper p-3 shadow-[0_18px_40px_-26px_rgb(0_0_0/0.7)]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent">
              <Icon name="refresh" className="h-4 w-4" />
            </span>
            <span className="flex-1">
              <span className="block text-xs font-semibold text-ink">{nome}</span>
              <span className="block text-[10px] text-muted">{quando}</span>
            </span>
            <span
              className={`flex h-5 w-9 items-center rounded-full p-0.5 ${
                ligada ? "justify-end bg-accent" : "justify-start bg-line"
              }`}
            >
              <span className="h-4 w-4 rounded-full bg-white shadow" />
            </span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function ArteSite() {
  return (
    <Frame className="h-44">
      <div className="absolute inset-x-5 top-5 overflow-hidden rounded-lg border border-line bg-paper">
        <div className="flex gap-1 border-b border-line px-2 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-line" />
          <span className="h-1.5 w-1.5 rounded-full bg-line" />
          <span className="h-1.5 w-1.5 rounded-full bg-line" />
        </div>
        <div className="space-y-2 p-3">
          <p className="font-display text-sm font-semibold tracking-display text-ink">Sua empresa, bem apresentada.</p>
          <p className="text-[10px] text-body">O seu serviço explicado em uma frase.</p>
          <span className="mt-2 inline-block rounded-full bg-accent px-2.5 py-1 text-[9px] font-semibold text-on-signal">
            Fale conosco
          </span>
        </div>
      </div>
    </Frame>
  );
}

function ArteIntegracao() {
  return (
    <Frame className="h-44">
      <div className="flex h-full items-center justify-center gap-3 pb-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface text-body">
          <Icon name="table" className="h-5 w-5" />
        </span>
        <span className="h-px w-5 bg-accent/60" />
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/50 bg-accent/15 text-accent">
          <Icon name="link" className="h-6 w-6" />
        </span>
        <span className="h-px w-5 bg-accent/60" />
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface text-[#25D366]">
          <WhatsAppIcon className="h-5 w-5" />
        </span>
      </div>
    </Frame>
  );
}

function ArtePainel() {
  return (
    <Frame className="h-44">
      <svg viewBox="0 0 200 90" className="absolute inset-x-5 top-6 w-[calc(100%-2.5rem)]" fill="none">
        <path
          d="M0 70 C 25 62, 35 40, 60 46 S 100 64, 120 38 S 165 18, 200 12"
          stroke="rgb(var(--accent))"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M0 70 C 25 62, 35 40, 60 46 S 100 64, 120 38 S 165 18, 200 12 V 90 H 0 Z"
          fill="rgb(var(--accent) / 0.14)"
        />
        <circle cx="120" cy="38" r="4" fill="rgb(var(--accent))" />
      </svg>
    </Frame>
  );
}

function ArteManutencao() {
  return (
    <Frame className="h-44">
      <div className="absolute inset-x-5 top-5 space-y-2">
        {[
          ["Nova funcionalidade", true],
          ["Correção aplicada", false],
          ["Melhoria de desempenho", false],
        ].map(([texto, novo]) => (
          <div
            key={texto as string}
            className="flex items-center gap-2 rounded-lg border border-line bg-paper px-3 py-2 text-[10px]"
          >
            <span className={`h-1.5 w-1.5 rounded-full ${novo ? "bg-accent" : "bg-muted"}`} />
            <span className="text-ink">{texto}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

type Servico = { titulo: [string, string]; descricao: string; icon: IconName; arte: ReactNode };

const principais: Servico[] = [
  {
    titulo: ["Sistemas Sob Medida.", "Feitos para o seu processo."],
    descricao:
      "Sistemas web e painéis administrativos construídos para o processo real da sua empresa, não para um template genérico.",
    icon: "code",
    arte: <ArteSistema />,
  },
  {
    titulo: ["Automação de Processos.", "Rotinas que rodam sozinhas."],
    descricao:
      "Tarefas manuais e repetitivas substituídas por rotinas que rodam sozinhas, sem depender de alguém lembrar de fazer.",
    icon: "refresh",
    arte: <ArteAutomacao />,
  },
];

type Complementar = Omit<Servico, "titulo"> & { titulo: string };

const complementares: Complementar[] = [
  {
    titulo: "Landing Pages e Sites Institucionais",
    descricao:
      "Páginas rápidas, responsivas e otimizadas para SEO, pensadas para converter visitante em contato.",
    icon: "monitor",
    arte: <ArteSite />,
  },
  {
    titulo: "Integrações e APIs",
    descricao:
      "Conexão entre sistemas, planilhas e ferramentas que você já usa, para os dados fluírem sem retrabalho manual.",
    icon: "link",
    arte: <ArteIntegracao />,
  },
  {
    titulo: "Painéis e Dashboards",
    descricao:
      "Visualização de dados e indicadores em tempo real, para decisões rápidas baseadas em número, não em achismo.",
    icon: "chart",
    arte: <ArtePainel />,
  },
  {
    titulo: "Manutenção e Evolução",
    descricao:
      "Suporte contínuo, correções e novas funcionalidades sobre sistemas que já estão em produção.",
    icon: "wrench",
    arte: <ArteManutencao />,
  },
];

export default function Servicos() {
  return (
    <section id="servicos" aria-labelledby="servicos-titulo" className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-page">
        <SectionHeading
          id="servicos-titulo"
          linha1="Da automação ao sistema completo."
          linha2="Tudo sob medida."
        >
          Da automação de um processo específico ao sistema completo, cada
          serviço é entregue sob medida para o seu negócio.
        </SectionHeading>

        <ul className="mt-16 grid gap-5 lg:grid-cols-2">
          {principais.map((s) => (
            <li key={s.titulo[0]} className="flex flex-col rounded-[28px] border border-line bg-surface p-3">
              {s.arte}
              <div className="px-4 pb-5 pt-6 sm:px-5">
                <h3 className="heading text-[1.6rem] sm:text-[1.9rem]">
                  {s.titulo[0]}
                  {" "}
                  <span className="md:block">{s.titulo[1]}</span>
                </h3>
                <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-body">{s.descricao}</p>
              </div>
            </li>
          ))}
        </ul>

        <ul className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {complementares.map((s) => (
            <li key={s.titulo} className="flex flex-col rounded-[26px] border border-line bg-surface p-3">
              {s.arte}
              <div className="px-3 pb-4 pt-5">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold tracking-display text-ink">
                  <Icon name={s.icon} className="h-[18px] w-[18px] shrink-0 text-accent" />
                  {s.titulo}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-body">{s.descricao}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <a
            href="#contato"
            className="focus-ring flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[15px] font-semibold text-paper transition-transform duration-300 ease-out-expo hover:-translate-y-0.5"
          >
            Planejar meu projeto
            <Icon name="arrowRight" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
