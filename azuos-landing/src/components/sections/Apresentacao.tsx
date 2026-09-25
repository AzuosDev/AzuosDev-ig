import type { ReactNode } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import {
  FluxoAutomatico,
  PainelIndicadores,
  PlanilhaParaSistema,
} from "@/components/ui/Illustrations";

const pontos: { titulo: [string, string]; texto: string; arte: ReactNode }[] = [
  {
    titulo: ["Nada de template genérico.", "Cada sistema nasce do seu fluxo."],
    texto:
      "Cada projeto parte do fluxo real da sua empresa para resolver o problema específico que está travando o crescimento.",
    arte: <PlanilhaParaSistema />,
  },
  {
    titulo: ["Menos tarefa manual.", "Menos erro operacional."],
    texto:
      "Processos manuais viram rotinas que rodam sozinhas. O resultado é tempo economizado e menos retrabalho no dia a dia.",
    arte: <FluxoAutomatico />,
  },
  {
    titulo: ["Menos achismo.", "Decisão com dado confiável."],
    texto:
      "Indicadores organizados mostram o que acontece na operação, para decidir com base em número.",
    arte: <PainelIndicadores />,
  },
];

export default function Apresentacao() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-page">
        <SectionHeading
          id="sobre-titulo"
          linha1="Processo manual trava o crescimento."
          linha2="A gente transforma em sistema."
        >
          A Azuos Dev é uma dev especializada em transformar processos manuais
          em sistemas e automações sob medida.
        </SectionHeading>

        <ul className="mt-16 grid gap-5 md:grid-cols-3">
          {pontos.map((ponto) => (
            <li
              key={ponto.titulo[0]}
              className="flex flex-col rounded-[26px] border border-line bg-surface p-3"
            >
              {ponto.arte}
              <div className="px-4 pb-5 pt-6">
                <h3 className="heading text-[1.4rem] leading-[1.1]">
                  {ponto.titulo[0]}
                  {" "}
                  <span className="md:block">{ponto.titulo[1]}</span>
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-body">{ponto.texto}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[15px] text-body">
          <span>
            <strong className="font-display text-xl font-semibold text-ink">4</strong> sistemas em
            produção
          </span>
          <span aria-hidden className="hidden h-4 w-px bg-line sm:block" />
          <span>
            <strong className="font-display text-xl font-semibold text-ink">6+</strong> tecnologias
            no stack
          </span>
          <span aria-hidden className="hidden h-4 w-px bg-line sm:block" />
          <a
            href="#projetos"
            className="focus-ring flex items-center gap-2 rounded border-b border-ink/30 pb-0.5 font-semibold text-ink hover:border-accent hover:text-accent"
          >
            Ver o que já entregamos
            <Icon name="arrowDown" className="h-4 w-4" />
          </a>
        </p>
      </div>
    </section>
  );
}
