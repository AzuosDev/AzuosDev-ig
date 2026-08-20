import { getWhatsAppLink } from "@/lib/whatsapp";

type Plano = {
  nome: string;
  descricao: string;
  itens: string[];
  destaque?: boolean;
};

const planos: Plano[] = [
  {
    nome: "Landing Page",
    descricao: "Página única focada em converter visitante em contato.",
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
    <section id="planos" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold text-text-primary sm:text-4xl">
          Planos
        </h2>
        <p className="mt-5 text-balance text-base text-text-secondary sm:text-lg">
          Cada projeto é orçado sob medida — os planos abaixo dão uma ideia do
          que costuma estar incluso em cada tipo de entrega.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {planos.map((plano) => (
          <div
            key={plano.nome}
            className={`flex flex-col rounded-2xl border p-6 ${
              plano.destaque
                ? "border-transparent bg-surface bg-gradient-to-b from-brand-start/15 via-surface to-surface shadow-[0_0_0_1px_rgba(124,58,237,0.5)]"
                : "border-white/10 bg-surface"
            }`}
          >
            {plano.destaque && (
              <span className="mb-4 w-fit rounded-full bg-gradient-to-r from-brand-start to-brand-end px-3 py-1 text-xs font-semibold text-text-primary">
                Mais popular
              </span>
            )}

            <h3 className="font-display text-xl font-semibold text-text-primary">
              {plano.nome}
            </h3>
            <p className="mt-2 text-sm text-text-secondary">
              {plano.descricao}
            </p>

            <p className="mt-6 font-display text-2xl font-semibold text-text-primary">
              Sob consulta
            </p>

            <ul className="mt-6 flex-1 space-y-3">
              {plano.itens.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-text-secondary"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-end"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={getWhatsAppLink(
                `Quero solicitar um orçamento para o plano ${plano.nome}`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                plano.destaque
                  ? "bg-gradient-to-r from-brand-start to-brand-end text-text-primary hover:opacity-90"
                  : "border border-white/15 text-text-primary hover:border-brand-end/50 hover:bg-white/5"
              }`}
            >
              Solicitar orçamento
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
