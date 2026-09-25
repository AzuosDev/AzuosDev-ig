import SectionHeading from "@/components/ui/SectionHeading";
import ProfileCardCarousel, { type Perfil } from "@/components/ui/ProfileCardCarousel";

const equipe: Perfil[] = [
  {
    nome: "Felipe de Souza",
    cargo: "Cofundador",
    foto: "/equipe/felipe-souza.jpg",
    foco: "50% 62%",
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
  {
    nome: "Luiz Eduardo",
    cargo: "Cofundador · Finanças e Marketing",
    foto: "/equipe/luiz-eduardo.jpg",
    bio: "Sócio e cofundador da Azuos Dev, à frente do marketing, das mídias sociais e do controle financeiro que mantém cada projeto no rumo.",
  },
];

export default function QuemSomos() {
  return (
    <section id="quem-somos" aria-labelledby="equipe-titulo" className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-page">
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

        <ProfileCardCarousel perfis={equipe} className="mt-14" />
      </div>
    </section>
  );
}
