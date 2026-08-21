export type Sistema = {
  nome: string;
  descricao: string;
  tags: string[];
  imagem: string;
  link: string;
};

export const sistemas: Sistema[] = [
  {
    nome: "Ucatálogo",
    descricao: "Catálogo digital para empresas divulgarem seus produtos",
    tags: ["Web App"],
    imagem: "/sistemas/ucatalogo.png", // placeholder — substituir pelo screenshot real
    link: "https://ucatalogo.vercel.app/",
  },
  {
    nome: "Trimbook",
    descricao: "App de gestão para barbearias — agendamentos e clientes",
    tags: ["Mobile App"],
    imagem: "/sistemas/trimbook.png", // placeholder — substituir pelo screenshot real
    link: "https://trimbook-barbershop.vercel.app/landing",
  },
  {
    nome: "MeuGasto",
    descricao: "Controle de gastos, orçamentos e metas financeiras",
    tags: ["Web App", "Finanças"],
    imagem: "/sistemas/meugasto.png",
    link: "https://meugasto.vercel.app/landing",
  },
  {
    nome: "InvenTech",
    descricao: "Sistema de gestão de inventário de TI",
    tags: ["Painel Admin"],
    imagem: "/sistemas/inventechti.png",
    link: "https://inventechti.vercel.app/landing",
  },
];
