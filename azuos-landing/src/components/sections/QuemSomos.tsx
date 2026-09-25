import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { GitHubIcon } from "@/components/ui/Icon";

type Membro = {
  nome: string;
  cargo: string;
  foto: string;
  bio: string;
  github: string;
};

const equipe: Membro[] = [
  {
    nome: "Felipe de Souza",
    cargo: "Cofundador",
    foto: "/equipe/felipe-souza.jpg",
    bio: "Cofundador da Azuos Dev, à frente do desenvolvimento e da arquitetura técnica de cada sistema entregue.",
    github: "https://github.com/Felipe-Souzza",
  },
  {
    nome: "Ezequiel Santos",
    cargo: "Cofundador",
    foto: "/equipe/ezequiel-santos.jpg",
    bio: "Cofundador da Azuos Dev, focado em automações e em transformar processos manuais em soluções sob medida.",
    github: "https://github.com/EzequiellSantos",
  },
];

export default function QuemSomos() {
  return (
    <section id="quem-somos" aria-labelledby="equipe-titulo" className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto grid max-w-page gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          id="equipe-titulo"
          align="left"
          linha1="Quem somos."
          linha2="Do início ao fim."
        >
          Por trás da Azuos Dev tem gente que já esteve do outro lado do
          balcão, resolvendo o mesmo tipo de problema que hoje resolvemos para
          os nossos clientes. Cada projeto passa pela nossa mão do início ao
          fim.
        </SectionHeading>

        <ul className="grid gap-5 sm:grid-cols-2">
          {equipe.map((membro, index) => (
            <li
              key={membro.nome}
              className={`group flex flex-col rounded-[28px] border border-line bg-surface p-3 ${
                index === 1 ? "sm:translate-y-10" : ""
              }`}
            >
              <div className="relative aspect-square overflow-hidden rounded-[20px] bg-paper-2">
                <Image
                  src={membro.foto}
                  alt={`Foto de ${membro.nome}`}
                  fill
                  sizes="(min-width: 1024px) 26vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover object-[50%_30%] transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#160E26]">
                  {membro.cargo}
                </span>
              </div>
              <div className="px-3 pb-3 pt-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="heading text-2xl">{membro.nome}</h3>
                  <a
                    href={membro.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub de ${membro.nome}`}
                    className="focus-ring flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface-2 text-body transition-colors hover:border-accent/50 hover:text-ink"
                  >
                    <GitHubIcon className="h-[18px] w-[18px]" />
                  </a>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-body">{membro.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
