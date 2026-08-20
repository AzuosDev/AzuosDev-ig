# Prompts sequenciados — Landing Page Azuos Dev

Use estes prompts em ordem, um por vez, no Claude Code (dentro da pasta do projeto). Cada um assume que o anterior já foi executado e revisado. Onde marcado **[AGUARDANDO]**, você vai me enviar a informação antes de rodar aquele prompt.

**Stack recomendada:** Next.js 14 (App Router) + TypeScript + Tailwind CSS. Justificativa: performance, SEO nativo (importante pra landing de captação de lead), e facilidade de manter cada "sistema" como link externo/rota própria.

**Identidade visual (extraída da logo Azuos Dev):**
- Fundo: quase-preto com leve tom violeta (`#0B0714`)
- Superfícies/cards: `#14101F`
- Gradiente de marca: `#7C3AED → #A78BFA` (roxo profundo → lilás)
- Texto principal: `#F5F3F9` (branco levemente violeta, não branco puro)
- Texto secundário: `#9C93AD`
- Display font: geométrica/tech (ex: "Space Grotesk" ou "General Sans")
- Body font: neutra de alta legibilidade (ex: "Inter")
- Motivo de assinatura: o ícone `</>` da logo reaparece como elemento gráfico sutil (divisor de section, marca d'água, cursor de digitação em algum texto) — não repetir em excesso, é o "acessório" da marca, não decoração de fundo.

---

## Prompt 0 — Setup do projeto e design tokens

```
Aja como desenvolvedor front-end sênior. Crie um projeto Next.js 14 (App Router) + TypeScript + Tailwind CSS chamado "azuos-landing".

Configure os design tokens no tailwind.config.ts com esta paleta de marca (empresa: Azuos Dev, dev de sistemas/automações, identidade visual dark + gradiente violeta):
- background: #0B0714
- surface: #14101F
- brand-start: #7C3AED
- brand-end: #A78BFA
- text-primary: #F5F3F9
- text-secondary: #9C93AD

Configure duas famílias de fonte via next/font: uma display geométrica (Space Grotesk) para headlines e uma body neutra (Inter) para texto corrido. Crie a estrutura de pastas para components/sections (um arquivo por section: Hero, Apresentacao, Servicos, Diferenciais, Sistemas, Planos, QuemSomos, FAQ, CTAFinal, Footer) mas deixe cada um como componente vazio por enquanto, só com o nome. Configure o layout.tsx global com o fundo escuro e as fontes aplicadas.

Não implemente conteúdo ainda, só a fundação do projeto.
```

## Prompt 1 — Hero

```
Implemente o componente Hero da landing page da Azuos Dev (sistemas, automações e resultados para empresas).

Requisitos:
- Headline forte comunicando o que a empresa faz e o resultado que gera (não "somos uma empresa de TI" — algo que fale do resultado prático pro cliente)
- Subtítulo de 1-2 linhas reforçando a proposta
- Dois CTAs: "Peça um orçamento" (primário, gradiente brand-start→brand-end) e "Fale no WhatsApp" (secundário, outline)
- Use o gradiente violeta como elemento visual de destaque (glow sutil atrás do headline, ou borda gradiente nos botões) — sem exagerar em brilho, deve parecer premium/tech, não neon
- Totalmente responsivo, mobile-first
- Respeite prefers-reduced-motion em qualquer animação de entrada

Não crie páginas novas, apenas o componente da section dentro da estrutura já criada.
```

## Prompt 2 — Apresentação Org

```
Implemente a section "Apresentação Org" da landing Azuos Dev: uma section institucional curta explicando quem é a empresa e sua proposta de valor central, antes de entrar em serviços.

Requisitos:
- Título de section + parágrafo curto (2-4 frases) — gere o texto com base no posicionamento: sistemas sob medida, automação de processos e foco em resultado mensurável para o cliente
- Pode incluir 2-3 números/indicadores de destaque em formato de destaque visual (ex: projetos entregues, tecnologias dominadas) — só inclua se fizer sentido sem inventar estatística que soe falsa; se não tiver dado real, não invente número
- Mantenha a paleta e tipografia definidas no setup
```

## Prompt 3 — Serviços

```
Implemente a section "Serviços" da landing Azuos Dev.

Requisitos:
- Grid de cards de serviço (ex: Desenvolvimento de Sistemas Sob Medida, Automação de Processos, Landing Pages e Sites Institucionais, Integrações/APIs — ajuste os itens ao que fizer sentido pro posicionamento "Sistemas • Automações • Resultados")
- Cada card: ícone, título, descrição curta (1-2 linhas)
- Grid responsivo: 3 colunas desktop, 2 tablet, 1 mobile
- Hover state discreto (leve elevação ou borda com gradiente da marca)
```

## Prompt 4 — Diferenciais / Por que nos escolher

```
Implemente a section "Diferenciais / Por que nos escolher" da landing Azuos Dev.

Contexto: a empresa ainda não tem depoimentos de clientes publicados, então esta section assume o papel de gerar confiança no lugar da prova social.

Conteúdo (4 diferenciais em formato de cards ou lista com ícone):
- Prazo de entrega
- Suporte pós-entrega
- Tecnologia utilizada
- Processo de trabalho transparente

Para cada um, escreva 1-2 frases específicas e concretas (evite clichê genérico tipo "qualidade e compromisso" sem dizer nada) que reforcem confiança mesmo sem case publicado.
```

## Prompt 5 — Sistemas (portfólio em cards)

```
Implemente a section "Sistemas" da landing Azuos Dev — portfólio de sistemas já desenvolvidos, em formato de cards.

Cada card deve ter:
- Imagem/screenshot do sistema (por enquanto use um placeholder de imagem com aspect-ratio 16:9, nomeado de forma que eu troque depois pelas imagens reais)
- Nome do projeto
- Descrição curta (1 linha) do que o sistema resolve
- 1-2 tags de tecnologia/tipo
- Botão "Ver projeto →" que abre o link em nova aba (target="_blank" rel="noopener noreferrer")

Estruture os dados dos sistemas como um array tipado em um arquivo separado data/sistemas.ts, com os campos: nome, descricao, tags, imagem, link. Use estes dados reais:

const sistemas = [
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
    imagem: "/sistemas/trimbook.png",
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

Grid responsivo: 2 colunas desktop (já que são 4 sistemas, evite 3 colunas pra não sobrar item órfão na última linha), 1 coluna mobile. Se algum sistema não tiver link válido, o card deve redirecionar para o WhatsApp com mensagem pré-preenchida "Quero saber mais sobre o sistema [nome]" em vez de dar erro.
```

## Prompt 6 — Planos / Preços

```
Implemente a section "Planos" da landing Azuos Dev.

Requisitos:
- 3 cards de plano (ex: Landing Page, Site Institucional, Sistema Sob Medida — ajuste conforme os serviços já definidos)
- Cada card lista o que está incluso (bullet points), sem valor fechado — todos os planos mostram "Sob consulta" no lugar do preço
- Botão de CTA "Solicitar orçamento" em cada card, levando para a section de contato final (scroll suave) ou para o WhatsApp
- Destaque visual leve no card do meio (borda com gradiente da marca) como "mais popular", se fizer sentido
```

## Prompt 7 — Quem somos

```
Implemente a section "Quem somos" da landing Azuos Dev — texto institucional mais pessoal sobre a equipe/fundadores por trás da empresa.

Como ainda não tenho fotos/bios reais para te passar, gere a estrutura do componente pronta para receber esses dados (nome, cargo, foto, mini-bio) em um array, com 1-2 itens de placeholder. Mantenha o texto de apoio da section focado em transmitir confiança e proximidade, coerente com o tom "Sistemas • Automações • Resultados".
```

## Prompt 8 — FAQ

```
Implemente a section "FAQ" da landing Azuos Dev em formato accordion (expande/colapsa), acessível via teclado.

Perguntas a incluir:
- Qual o prazo médio de entrega de um projeto?
- Como funciona a forma de pagamento?
- Vocês oferecem suporte depois da entrega?
- Existe garantia sobre o sistema entregue?
- Como funciona o processo do orçamento?

Escreva respostas curtas e diretas (2-4 frases cada) coerentes com o posicionamento da empresa. Use um componente de accordion acessível (aria-expanded, navegação por teclado).
```

## Prompt 9 — CTA final + Rodapé

```
Implemente a section de CTA final e o Footer da landing Azuos Dev.

CTA final:
- Reforço da chamada do Hero, com formulário curto (nome, e-mail/WhatsApp, mensagem) + botão de WhatsApp direto
- O formulário pode simular envio por enquanto (sem backend ainda) — deixe um TODO comentado indicando onde entra a integração real (ex: envio por API route ou serviço de e-mail)

Footer:
- Logo (placeholder), links de navegação para as sections (scroll suave), redes sociais (ícones), e-mail de contato, e nota de copyright
```

## Prompt 10 — Revisão de responsividade, acessibilidade e performance

```
Revise a landing page completa da Azuos Dev com foco em:

1. Responsividade real em breakpoints mobile (375px), tablet (768px) e desktop (1280px+) — corrija qualquer overflow, espaçamento quebrado ou texto cortado
2. Acessibilidade: contraste de texto sobre o fundo escuro (mínimo AA), foco visível em todos os elementos interativos (botões, links, accordion do FAQ, formulário), texto alternativo em imagens
3. Performance: imagens com next/image e lazy loading, remoção de qualquer import não usado
4. Confira se prefers-reduced-motion está sendo respeitado em todas as animações do site, não só no Hero

Tire prints (ou descreva) das telas mobile e desktop revisadas antes de finalizar.
```

## Prompt 11 — SEO e metadata

```
Configure o SEO da landing page da Azuos Dev:

- metadata do Next.js (title, description, og:image, og:title) no layout.tsx, com título e descrição focados em "sistemas sob medida, automação de processos e resultados para empresas"
- favicon a partir da logo (vou te enviar o arquivo)
- sitemap.xml e robots.txt básicos
- Verifique se a estrutura de headings (h1 único no Hero, h2 nas sections) está semanticamente correta para SEO
```

---

### Observação
O Prompt 5 (Sistemas) já está com os links e descrições reais dos 4 projetos. Confirme se o nome "InventechTI" está correto antes de rodar — se não estiver, ajuste no array. Os prompts 7 (Quem somos) e o item de favicon no prompt 11 ainda dependem de conteúdo real (fotos/bios da equipe, arquivo da logo em alta resolução).
