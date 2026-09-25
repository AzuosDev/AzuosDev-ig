import { getWhatsAppLink } from "@/lib/whatsapp";
import SectionHeading from "@/components/ui/SectionHeading";
import { Icon, type IconName } from "@/components/ui/Icon";

type Plano = {
  nome: string;
  descricao: string;
  itens: string[];
  icon: IconName;
  destaque?: boolean;
};

const planos: Plano[] = [
  {
    nome: "Landing Page",
    descricao: "Página única focada em converter visitante em contato.",
    icon: "monitor",
    itens: [
      "Design responsivo mobile-first",
      "Otimizada para SEO e performance",
      "Integração com WhatsApp",
      "Até 1 rodada de ajustes pós-entrega",
    ],
  },
  {
    nome: "Site Institucional",
    descricao: "Presença completa online, com múltiplas páginas.",
    icon: "layers",
    itens: [
      "Tudo do plano Landing Page",
      "Múltiplas páginas (sobre, serviços, contato)",
      "Formulário de contato funcional",
      "Painel simples para atualizar conteúdo",
    ],
    destaque: true,
  },
  {
    nome: "Sistema Sob Medida",
    descricao: "Sistema web construído para o processo real do seu negócio.",
    icon: "code",
    itens: [
      "Levantamento de requisitos dedicado",
      "Painel administrativo próprio",
      "Integrações com ferramentas que você já usa",
      "Suporte pós-entrega incluso",
    ],
  },
];

export default function Planos() {
  return (
    <section
      id="planos"
      aria-labelledby="planos-titulo"
      className="border-y border-line bg-paper-2 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-page">
        <SectionHeading
          id="planos-titulo"
          linha1="Cada projeto é orçado sob medida."
          linha2="Os planos mostram o ponto de partida."
        >
          Os planos abaixo dão uma ideia do que costuma estar incluso em cada
          tipo de entrega.
        </SectionHeading>

        <ul className="mx-auto mt-16 grid max-w-6xl gap-5 lg:grid-cols-3 lg:items-stretch">
          {planos.map((plano) => (
            <li
              key={plano.nome}
              className={`relative flex flex-col rounded-[28px] border p-7 sm:p-8 ${
                plano.destaque
                  ? "border-accent/50 bg-[radial-gradient(120%_70%_at_50%_0%,rgb(var(--scene))_0%,rgb(var(--surface))_65%)] shadow-[0_30px_70px_-35px_rgb(var(--signal-2)/0.6)]"
                  : "border-line bg-surface"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${
                    plano.destaque ? "border-accent/50 bg-accent/15 text-accent" : "border-line bg-surface-2 text-body"
                  }`}
                >
                  <Icon name={plano.icon} className="h-6 w-6" />
                </span>
                {plano.destaque && (
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-on-signal">
                    Mais popular
                  </span>
                )}
              </div>

              <h3 className="heading mt-6 text-[1.75rem]">{plano.nome}</h3>
              <p className="mt-2 text-[15px] text-body">{plano.descricao}</p>

              <p className="mt-6 border-y border-line py-5 font-display text-2xl font-semibold tracking-display text-ink">
                Sob consulta
              </p>

              <ul className="mt-6 flex-1 space-y-3.5">
                {plano.itens.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-body">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Icon name="check" className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={getWhatsAppLink(`Quero solicitar um orçamento para o plano ${plano.nome}`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`focus-ring mt-8 flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-[15px] font-semibold transition-[transform,background-color,border-color] duration-300 ease-out-expo hover:-translate-y-0.5 ${
                  plano.destaque
                    ? "btn-signal"
                    : "border border-line bg-surface-2 text-ink hover:border-accent/50"
                }`}
              >
                Solicitar orçamento
                <Icon name="arrowRight" className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
