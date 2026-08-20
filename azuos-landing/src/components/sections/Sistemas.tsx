import Image from "next/image";
import { sistemas } from "@/data/sistemas";
import { getWhatsAppLink } from "@/lib/whatsapp";

function isLinkValido(link: string) {
  return /^https?:\/\//.test(link);
}

export default function Sistemas() {
  return (
    <section id="sistemas" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold text-text-primary sm:text-4xl">
          Sistemas que já entregamos
        </h2>
        <p className="mt-5 text-balance text-base text-text-secondary sm:text-lg">
          Alguns projetos reais desenvolvidos pela Azuos Dev, em produção.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        {sistemas.map((sistema) => {
          const href = isLinkValido(sistema.link)
            ? sistema.link
            : getWhatsAppLink(
                `Quero saber mais sobre o sistema ${sistema.nome}`,
              );

          return (
            <div
              key={sistema.nome}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-brand-end/40 hover:shadow-[0_16px_32px_-20px_rgba(124,58,237,0.6)]"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-background">
                <Image
                  src={sistema.imagem}
                  alt={`Preview do sistema ${sistema.nome}`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap gap-2">
                  {sistema.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-brand-start/10 px-3 py-1 text-xs font-medium text-brand-end"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold text-text-primary">
                  {sistema.nome}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {sistema.descricao}
                </p>

                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-end transition-colors hover:text-text-primary"
                >
                  Ver projeto
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
