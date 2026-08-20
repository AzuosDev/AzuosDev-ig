import Image from "next/image";

type Membro = {
  nome: string;
  cargo: string;
  foto: string;
  bio: string;
};

// TODO: substituir pelos dados reais dos fundadores/equipe (nome, cargo, foto, bio)
const equipe: Membro[] = [
  {
    nome: "Nome do fundador",
    cargo: "Cargo / função",
    foto: "/equipe/placeholder-1.png",
    bio: "Mini-bio curta contando a trajetória e o que motiva a pessoa a construir sistemas para outras empresas.",
  },
  {
    nome: "Nome do fundador",
    cargo: "Cargo / função",
    foto: "/equipe/placeholder-2.png",
    bio: "Mini-bio curta contando a trajetória e o que motiva a pessoa a construir sistemas para outras empresas.",
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
        {equipe.map((membro) => (
          <div
            key={membro.nome}
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
              {membro.nome}
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
