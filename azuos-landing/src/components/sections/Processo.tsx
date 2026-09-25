"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

function Painel({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden
      className="relative overflow-hidden rounded-[26px] border border-line bg-surface p-3"
    >
      <div className="relative flex h-60 items-center justify-center overflow-hidden rounded-[18px] border border-line bg-gradient-to-br from-scene/70 via-paper-2 to-surface px-6 sm:h-64">
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div className="relative w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}

const etapas: {
  titulo: string;
  texto: string;
  itens: string[];
  arte: ReactNode;
}[] = [
  {
    titulo: "Conversa e diagnóstico.",
    texto:
      "Você conta o que precisa. A gente entende o problema e o processo por trás dele antes de propor qualquer solução.",
    itens: ["Levantamento do processo real", "Objetivo do projeto bem definido"],
    arte: (
      <Painel>
        <div className="space-y-3">
          <div className="w-[78%] rounded-2xl rounded-bl-md border border-line bg-surface p-3 text-xs text-body shadow-sm">
            Hoje controlamos tudo em planilha e sempre falta alguma coisa…
          </div>
          <div className="ml-auto w-[70%] rounded-2xl rounded-br-md bg-accent/90 p-3 text-xs font-medium text-on-signal shadow-[0_14px_30px_-14px_rgb(var(--signal-2)/0.8)]">
            Vamos mapear esse fluxo juntos.
          </div>
        </div>
      </Painel>
    ),
  },
  {
    titulo: "Orçamento sem letra miúda.",
    texto:
      "Você recebe escopo, prazo e valor definidos, com cronograma e marcos por etapa já no orçamento.",
    itens: ["Cronograma com marcos por etapa", "Pagamento dividido por etapa"],
    arte: (
      <Painel>
        <div className="rounded-xl border border-line bg-surface p-4 shadow-[0_24px_50px_-28px_rgb(0_0_0/0.7)]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-ink">Orçamento</span>
            <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold text-accent">
              escopo fechado
            </span>
          </div>
          <div className="mt-4 flex items-center">
            {["Entrada", "Meio", "Entrega"].map((marco, i) => (
              <div key={marco} className="flex flex-1 items-center">
                <span className="flex flex-col items-center gap-1.5">
                  <span
                    className={`h-3 w-3 rounded-full border-2 ${
                      i === 0 ? "border-accent bg-accent" : "border-line bg-surface"
                    }`}
                  />
                  <span className="text-[10px] text-muted">{marco}</span>
                </span>
                {i < 2 && <span className="mb-4 h-px flex-1 bg-line" />}
              </div>
            ))}
          </div>
          <dl className="mt-3 divide-y divide-line border-t border-line text-[11px]">
            {[
              ["Escopo", "definido por escrito"],
              ["Prazo", "marcos por etapa"],
            ].map(([termo, valor]) => (
              <div key={termo} className="flex justify-between py-1.5">
                <dt className="text-muted">{termo}</dt>
                <dd className="font-medium text-ink">{valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Painel>
    ),
  },
  {
    titulo: "Desenvolvimento transparente.",
    texto:
      "Você acompanha cada etapa, sem caixa-preta: o que já foi feito, o que falta e o que precisa de decisão sua fica sempre visível.",
    itens: [
      "Stack moderna: React, Node.js, MongoDB",
      "Nada de tecnologia que te deixa refém",
    ],
    arte: (
      <Painel>
        <div className="grid grid-cols-3 gap-2">
          {[
            ["Feito", ["Login e acesso", "Cadastro de clientes", "Tela de pedidos"], false],
            ["Fazendo", ["Relatório mensal", "Aviso no WhatsApp"], true],
            ["Sua decisão", ["Aprovar layout"], false],
          ].map(([coluna, tarefas, ativo]) => (
            <div key={coluna as string} className="rounded-xl border border-line bg-surface/80 p-2">
              <span
                className={`mb-2 block text-[10px] font-semibold ${ativo ? "text-accent" : "text-muted"}`}
              >
                {coluna}
              </span>
              <div className="space-y-1.5">
                {(tarefas as string[]).map((tarefa, i) => (
                  <span
                    key={tarefa}
                    className={`block rounded-md border px-1.5 py-1 text-[9px] leading-tight sm:text-[10px] ${
                      ativo && i === 0
                        ? "border-accent/50 bg-accent/20 font-medium text-ink"
                        : "border-line bg-paper text-body"
                    }`}
                  >
                    {tarefa}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Painel>
    ),
  },
  {
    titulo: "Entrega com garantia.",
    texto:
      "O sistema entregue passa por um período de garantia com correções incluídas. Ajuste pontual depois do lançamento não vira orçamento novo.",
    itens: ["Correção sem custo no escopo combinado", "Manutenção e evolução quando precisar"],
    arte: (
      <Painel>
        <div className="flex items-center gap-4 rounded-xl border border-line bg-surface p-4 shadow-[0_24px_50px_-28px_rgb(0_0_0/0.7)]">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent">
            <Icon name="shield" className="h-7 w-7" />
          </span>
          <div className="flex-1">
            <span className="flex items-center gap-2 text-sm font-semibold text-ink">
              Em produção
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgb(52_211_153/0.2)]" />
            </span>
            <span className="text-xs text-muted">Garantia ativa · correções incluídas</span>
          </div>
        </div>
      </Painel>
    ),
  },
];

export default function Processo() {
  const [ativa, setAtiva] = useState(0);
  const [preenchido, setPreenchido] = useState(0);
  const [total, setTotal] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setAtiva(Number((entry.target as HTMLElement).dataset.index));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // A linha lilás desce até o marcador da etapa atual; a cinza vai até o último.
    const medir = () => {
      setPreenchido(refs.current[ativa]?.offsetTop ?? 0);
      setTotal(refs.current[etapas.length - 1]?.offsetTop ?? 0);
    };
    medir();
    window.addEventListener("resize", medir);
    return () => window.removeEventListener("resize", medir);
  }, [ativa]);

  return (
    <section id="processo" aria-labelledby="processo-titulo" className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-page">
        <SectionHeading id="processo-titulo" linha1="Seu projeto em" linha2="quatro etapas claras.">
          Do primeiro contato à entrega: você sabe o que acontece em cada fase
          e o que vem a seguir.
        </SectionHeading>

        <ol className="relative mt-20">
          <span
            aria-hidden
            className="absolute left-[11px] top-10 hidden w-px bg-line sm:block"
            style={{ height: total }}
          />
          <span
            aria-hidden
            className="absolute left-[11px] top-10 hidden w-px bg-accent transition-[height] duration-700 ease-out-expo sm:block"
            style={{ height: preenchido }}
          />
          {etapas.map((etapa, index) => {
            const isAtiva = index <= ativa;
            return (
              <li
                key={etapa.titulo}
                data-index={index}
                ref={(el) => {
                  refs.current[index] = el;
                }}
                className="relative grid gap-8 pb-16 last:pb-0 sm:pl-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-24"
              >
                <span
                  aria-hidden
                  className={`absolute left-0 top-10 hidden h-[23px] w-[23px] items-center justify-center rounded-full border transition-all duration-500 sm:flex ${
                    isAtiva
                      ? "border-accent/60 bg-accent/20 shadow-[0_0_0_6px_rgb(var(--accent)/0.12)]"
                      : "border-line bg-surface"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full transition-colors duration-500 ${
                      isAtiva ? "bg-accent" : "bg-line"
                    }`}
                  />
                </span>
                <div>
                  <span
                    className={`block font-display text-5xl font-semibold tabular-nums tracking-display transition-colors duration-500 sm:text-6xl ${
                      isAtiva ? "text-accent" : "text-muted/60"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="heading mt-2 text-[1.75rem] sm:text-[2rem]">{etapa.titulo}</h3>
                  <p className="mt-4 max-w-[48ch] text-[15px] leading-relaxed text-body">{etapa.texto}</p>
                  <ul className="mt-6 space-y-3">
                    {etapa.itens.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm font-medium text-ink">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-on-signal">
                          <Icon name="check" className="h-3 w-3" strokeWidth={2.5} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {etapa.arte}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
