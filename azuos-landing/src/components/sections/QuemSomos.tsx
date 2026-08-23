import Image from "next/image";

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
    <section id="quem-somos" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold text-text-primary sm:text-4xl">
          Quem somos
        </h2>
        <p className="mt-5 text-balance text-base text-text-secondary sm:text-lg">
          Por trás da Azuos Dev tem gente que já esteve do outro lado do
          balcão — resolvendo o mesmo tipo de problema que hoje resolvemos
          para os nossos clientes. Cada projeto passa pela nossa mão do início
          ao fim.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
        {equipe.map((membro, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-2xl border border-white/10 bg-surface p-6 text-center"
          >
            <div className="relative h-20 w-20 overflow-hidden rounded-full bg-background ring-1 ring-white/10">
              <Image
                src={membro.foto}
                alt={`Foto de ${membro.nome}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>

            <h3 className="mt-4 font-display text-lg font-semibold text-text-primary">
              <a
                href={membro.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand-end focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-end"
              >
                {membro.nome}
              </a>
            </h3>
            <p className="text-sm font-medium text-brand-end">
              {membro.cargo}
            </p>
            <p className="mt-3 text-sm text-text-secondary">{membro.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
