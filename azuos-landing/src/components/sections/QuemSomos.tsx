import SectionHeading from "@/components/ui/SectionHeading";
import ProfileCardCarousel, { type Perfil } from "@/components/ui/ProfileCardCarousel";

const equipe: Perfil[] = [
  {
    nome: "Felipe de Souza",
    cargo: "Cofundador · Desenvolvimento e Infraestrutura",
    foto: "/equipe/felipe-souza.jpg",
    foco: "50% 62%",
    bio: "Cofundador da Azuos Dev, responsável pelo desenvolvimento e pela arquitetura dos sistemas, do código à infraestrutura e aos servidores onde cada projeto roda.",
    github: "https://github.com/Felipe-Souzza",
  },
  {
    nome: "Ezequiel Santos",
    cargo: "Cofundador · Automações",
    foto: "/equipe/ezequiel-santos.jpg",
    bio: "Cofundador da Azuos Dev, especialista em automação de processos: mapeia a rotina manual que trava a operação e devolve ela rodando sozinha.",
    github: "https://github.com/EzequiellSantos",
  },
  {
    nome: "Luiz Eduardo",
    cargo: "Cofundador · Finanças e Marketing",
    foto: "/equipe/luiz-eduardo.jpg",
    bio: "Sócio e cofundador da Azuos Dev, à frente do marketing, das mídias sociais e do controle financeiro que mantém cada projeto no rumo.",
    github: "https://github.com/Luizeduardo09",
  },
  {
    nome: "David Rafael",
    cargo: "Cofundador · Negócios e Vendas",
    foto: "/equipe/david-rafael.jpg",
    bio: "Cofundador da Azuos Dev, à frente de negócios e vendas, acompanha o cliente do primeiro contato ao desenvolvimento e à entrega.",
    github: "https://github.com/NaoSouODavid",
  },
];

export default function QuemSomos() {
  return (
    <section id="quem-somos" aria-labelledby="equipe-titulo" className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto grid max-w-page items-center gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
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

        <ProfileCardCarousel perfis={equipe} className="lg:justify-self-end" />
      </div>
    </section>
  );
}
