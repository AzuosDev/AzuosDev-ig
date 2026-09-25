"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { sistemas } from "@/data/sistemas";
import { getWhatsAppLink } from "@/lib/whatsapp";
import SectionHeading from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

function isLinkValido(link: string) {
  return /^https?:\/\//.test(link);
}

const TODOS = "Todos";

export default function Sistemas() {
  const [filtro, setFiltro] = useState(TODOS);

  const categorias = useMemo(() => {
    const contagem = new Map<string, number>();
    sistemas.forEach((s) => s.tags.forEach((t) => contagem.set(t, (contagem.get(t) ?? 0) + 1)));
    return [[TODOS, sistemas.length] as const, ...Array.from(contagem.entries())];
  }, []);

  const visiveis = sistemas.filter((sistema) => filtro === TODOS || sistema.tags.includes(filtro));

  return (
    <section
      id="projetos"
      aria-labelledby="projetos-titulo"
      className="border-y border-line bg-paper-2 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-page">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading
            id="projetos-titulo"
            align="left"
            linha1="Ideias de verdade."
            linha2="Sistemas em produção."
          />
          <div className="max-w-sm">
            <div className="flex items-center gap-3 text-sm font-semibold text-ink">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface">
                <Image src="/logo.png" alt="" width={24} height={24} className="h-6 w-6" />
              </span>
              Desenvolvido pela Azuos Dev
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              Alguns projetos reais desenvolvidos pela Azuos Dev, em produção.
              Abra qualquer um e veja funcionando.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5">
          <div role="group" aria-label="Filtrar projetos por categoria" className="flex flex-wrap gap-2">
            {categorias.map(([nome, total]) => {
              const ativo = filtro === nome;
              return (
                <button
                  key={nome}
                  type="button"
                  aria-pressed={ativo}
                  onClick={() => setFiltro(nome)}
                  className={`focus-ring flex items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-medium transition-colors ${
                    ativo
                      ? "border-accent/50 bg-accent/15 text-ink"
                      : "border-line bg-surface text-body hover:text-ink"
                  }`}
                >
                  {nome}
                  <span
                    className={`rounded-md px-1.5 text-xs tabular-nums ${
                      ativo ? "bg-accent/25 text-ink" : "bg-surface-2 text-muted"
                    }`}
                  >
                    {total}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="text-sm tabular-nums text-muted" aria-live="polite">
            {visiveis.length} de {sistemas.length} projetos
          </p>
        </div>

        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {visiveis.map((sistema) => {
            const href = isLinkValido(sistema.link)
              ? sistema.link
              : getWhatsAppLink(`Quero saber mais sobre o sistema ${sistema.nome}`);

            return (
              <li
                key={`${filtro}-${sistema.nome}`}
                className="group relative flex flex-col rounded-[28px] border border-line bg-surface p-3 motion-safe:animate-rise"
              >
                <div className="relative aspect-[16/11] overflow-hidden rounded-[20px] border border-line bg-[radial-gradient(90%_80%_at_50%_100%,rgb(var(--scene))_0%,rgb(var(--paper-2))_70%)]">
                  <div className="dot-grid absolute inset-0 opacity-50" />
                  <div className="absolute inset-x-[7%] top-[12%] overflow-hidden rounded-xl border border-line bg-paper shadow-[0_30px_60px_-24px_rgb(0_0_0/0.7)] transition-transform duration-700 ease-out-expo group-hover:-translate-y-2 group-hover:scale-[1.015]">
                    <div className="flex items-center gap-1.5 border-b border-line bg-surface-2 px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-line" />
                      <span className="h-2 w-2 rounded-full bg-line" />
                      <span className="h-2 w-2 rounded-full bg-line" />
                      <span className="ml-3 truncate text-[11px] text-muted">
                        {sistema.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      </span>
                    </div>
                    <div className="relative aspect-video">
                      <Image
                        src={sistema.imagem}
                        alt={`Tela do sistema ${sistema.nome}`}
                        fill
                        sizes="(min-width: 768px) 45vw, 90vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                  <span
                    aria-hidden
                    className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper shadow-lg transition-transform duration-500 ease-out-expo group-hover:rotate-45"
                  >
                    <Icon name="arrowUpRight" className="h-5 w-5" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-4 pb-4 pt-5">
                  <h3 className="heading text-[1.75rem]">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring rounded after:absolute after:inset-0 after:rounded-[28px]"
                    >
                      {sistema.nome}
                      <span className="sr-only"> (abre em nova aba)</span>
                    </a>
                  </h3>
                  <p className="mt-2 text-[15px] text-body">{sistema.descricao}</p>
                  <p className="mt-1 text-sm text-muted">{sistema.tags.join(" · ")}</p>
                  <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Ver projeto
                    <Icon
                      name="arrowRight"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-[24px] border border-line bg-surface p-5 sm:flex-row sm:items-center sm:p-6">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent">
              <Icon name="sparkle" className="h-6 w-6" />
            </span>
            <div>
              <p className="font-display text-lg font-semibold tracking-display text-ink">
                O próximo sistema pode ser o&nbsp;seu.
              </p>
              <p className="text-sm text-body">Conte o processo que hoje toma o seu tempo.</p>
            </div>
          </div>
          <a
            href="#contato"
            className="focus-ring flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition-transform duration-300 ease-out-expo hover:-translate-y-0.5"
          >
            Pedir orçamento
            <Icon name="arrowRight" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
