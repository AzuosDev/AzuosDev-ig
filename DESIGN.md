---
name: Azuos Dev
description: Sistemas sob medida e automação de processos para PMEs, apresentados como um estúdio de produto em violeta noturno.
colors:
  paper: "rgb(11 7 20)"
  paper-2: "rgb(16 11 28)"
  surface: "rgb(20 16 31)"
  surface-2: "rgb(28 22 43)"
  line: "rgb(44 36 62)"
  ink: "rgb(245 243 249)"
  body: "rgb(194 186 210)"
  muted: "rgb(156 147 173)"
  accent: "rgb(167 139 250)"
  signal: "rgb(205 190 255)"
  signal-2: "rgb(167 139 250)"
  on-signal: "rgb(22 10 46)"
  scene: "rgb(33 19 66)"
  dot: "rgb(167 139 250)"
  brand-start: "#7C3AED"
  brand-end: "#A78BFA"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Geist, sans-serif"
    fontSize: "3.9rem"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bricolage Grotesque, Geist, sans-serif"
    fontSize: "3.4rem"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Bricolage Grotesque, Geist, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  numeral:
    fontFamily: "Bricolage Grotesque, Geist, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "tnum"
  lead:
    fontFamily: "Geist, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Geist, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Geist, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.43
rounded:
  md: "6px"
  lg: "8px"
  xl: "12px"
  2xl: "16px"
  media: "20px"
  panel: "24px"
  card: "28px"
  stage: "32px"
  full: "9999px"
spacing:
  gutter-sm: "16px"
  gutter-md: "24px"
  gutter-lg: "32px"
  card-pad: "28px"
  card-pad-lg: "32px"
  section-y: "96px"
  section-y-lg: "128px"
  page-max: "88rem"
  stage-max: "92rem"
components:
  button-signal:
    textColor: "{colors.on-signal}"
    rounded: "{rounded.2xl}"
    padding: "14px 24px"
    typography: "{typography.body}"
  button-ink-pill:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.2xl}"
    padding: "14px 24px"
  button-icon:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    rounded: "{rounded.full}"
    size: "40px"
  input-field:
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "14px 16px"
  nav-link:
    textColor: "{colors.body}"
    rounded: "{rounded.xl}"
    padding: "8px 14px"
  nav-link-active:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
  chip-filter:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    rounded: "{rounded.xl}"
    padding: "8px 14px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  stage:
    rounded: "{rounded.stage}"
---

# Design System: Azuos Dev

## Overview

**Creative North Star: "O Estúdio de Produto Noturno"**

A página inteira se comporta como a bancada de um estúdio que fabrica software: palcos escuros e arredondados, banhados de violeta profundo com uma grade de pontos, onde a prova aparece em forma de interface (janelas de navegador, quadros de tarefas, orçamentos, conversas) desenhada em código, nunca como ilustração decorativa. O tom é confiante e técnico sem frieza: o lilás é o sinal que responde, a tinta clara é a afirmação.

A densidade é média e generosa: seções com 96 a 128px de respiro vertical, painéis com borda de 1px e cantos grandes, conteúdo em até 88rem. O mundo tem dois temas com o mesmo desenho: escuro como padrão (papel violeta quase preto) e claro por toggle (papel lilás muito claro, tinta violeta escura). Nada muda de forma entre os temas, só os valores das variáveis.

A tipografia carrega a voz: Bricolage Grotesque com tracking apertado em títulos de duas linhas, a segunda sempre em lilás. Geist faz o trabalho do corpo, sem enfeite.

**Key Characteristics:**
- Palcos arredondados (32px) com lavagem violeta e grade de pontos abrem e fecham a página.
- Títulos em duas linhas: afirmação em tinta, resposta em lilás.
- Painéis `surface` sobre `paper`, separados por borda `line` de 1px, não por sombra.
- Provas como mini-interfaces codificadas dentro de molduras de 26/18px.
- Um único gradiente de sinal (lilás claro para lilás) reservado à ação principal.
- Tema escuro padrão e tema claro espelhado pelas mesmas variáveis RGB.

## Colors

Uma família monocromática violeta: neutros levemente tingidos de violeta e um único acento lilás que faz o papel de sinal. Todos os tokens vivem em `globals.css` como tripletos RGB (`--paper: 11 7 20`) para aceitar os modificadores de opacidade do Tailwind (`bg-accent/15`, `border-accent/50`). O frontmatter registra o tema escuro (padrão); o tema claro redefine as mesmas variáveis em `:root[data-theme="light"]`.

### Primary
- **Lilás Sinal** (`accent`): segunda linha de todos os títulos, links ativos, ícones de destaque, marcadores de check, estado ativo de filtros e etapas, anel de foco. No tema claro vira um violeta profundo (109 40 217) para manter contraste sobre papel claro.
- **Gradiente de Sinal** (`signal` para `signal-2`): exclusivo do botão principal (`.btn-signal`), em ângulo de 100deg, com texto `on-signal`. No claro vai de 139 92 246 para 109 40 217 com texto branco.
- **Violeta de Marca** (`brand-start` #7C3AED, `brand-end` #A78BFA): cores fixas do logotipo; no código aparecem só no ponto final do wordmark do rodapé.

### Neutral
- **Papel Noturno** (`paper`): fundo da página e do header. Claro: 248 246 252.
- **Papel Recuado** (`paper-2`): faixas de seção alternadas (Projetos, Planos) e moldura do FAQ, sempre com borda `line` em cima e embaixo. Claro: 240 236 249.
- **Superfície** (`surface`): cartões, formulário, botões secundários e ícone. Claro: branco puro.
- **Superfície Elevada** (`surface-2`): poços de ícone, link de navegação ativo, contadores, barra de título das janelas simuladas. Claro: 245 241 252.
- **Fio** (`line`): toda borda de 1px, divisores, pontos inativos. Claro: 224 217 238.
- **Tinta** (`ink`): títulos, rótulos, texto de ação; também fundo da pílula clara de CTA. Claro: 22 14 38.
- **Corpo** (`body`): parágrafos e links de navegação em repouso. Claro: 72 63 94.
- **Apagado** (`muted`): metadados, contadores, legendas, numeração inativa. Claro: 101 92 122.
- **Cena** (`scene`): a lavagem violeta profunda dos palcos, do cartão de plano destacado e do fundo das molduras de prova. Claro: 236 228 255.
- **Ponto** (`dot`): cor da grade de pontos, sempre a 22% de opacidade. Claro: 124 58 237.

### Named Rules
**The Second-Line Rule.** O lilás entra no texto como resposta: a segunda linha do título, o link ativo, o número da etapa ativa. Nunca em parágrafos inteiros.

**The One Gradient Rule.** O gradiente de sinal pertence só ao botão de ação principal (e ao ícone de marca em Quem Somos). Cartões, fundos e títulos não usam gradiente de sinal; fundos usam a lavagem `scene`.

**The Variable-Only Rule.** Toda cor de interface sai de uma variável de `globals.css`, para que o tema claro funcione sem exceções. Literais hex ficam restritos a marcas de terceiros (verde WhatsApp #25D366).

## Typography

**Display Font:** Bricolage Grotesque (fallback Geist, sans-serif), pesos 500/600/700
**Body Font:** Geist (fallback sans-serif), pesos 400/500/600

**Character:** Uma grotesca expressiva, de contraste óptico, com tracking fortemente negativo, contra uma sans neutra e precisa. A display fala como marca; Geist fala como produto.

### Hierarchy
- **Display** (600, 2.5rem mobile, 3.4rem sm, 3.9rem xl; line-height 1.02; -0.04em): só o título do hero, em duas linhas animadas.
- **Headline** (600, 2.2rem, 2.9rem sm, 3.4rem lg; 1.02; -0.04em): títulos de seção via `SectionHeading`, sempre duas linhas, `text-wrap: balance`. Variações de 2.4rem/3rem no FAQ e rodapé.
- **Title** (600, 1.75rem, até 2rem; 1.02; -0.04em): nomes de projeto, planos, etapas, título do formulário.
- **Numeral** (600, 3rem mobile / 3.75rem sm; algarismos tabulares): numeração 01–04 das etapas do processo, `muted` a 60% em repouso e `accent` quando ativa.
- **Lead** (400, 1.125rem, 1.625): parágrafo de abertura, até 54–58ch.
- **Body** (400, 15px, 1.625): texto de cartões e listas, até 48ch.
- **Label** (600, 14px): rótulos de campo, títulos de coluna do rodapé, metadados em `muted`. Sempre em caixa normal.
- **Micro** (10–11px): só dentro das mini-interfaces de prova, nunca em texto de leitura.

### Named Rules
**The Tight Display Rule.** Toda instância de Bricolage leva `tracking-display` (-0.04em) e line-height 1.02, pela classe `.heading`. A única exceção é o e-mail grande do rodapé (-0.02em), que precisa ser legível como endereço.

**The Sentence-Case Rule.** Nenhum rótulo em caixa alta com tracking largo. Hierarquia vem de tamanho, peso e cor.

## Layout

Contêiner de conteúdo em `max-w-page` (88rem) com gutters de 16/24/32px (mobile/sm/lg). Os palcos do hero e do rodapé saem quase de borda a borda: 92rem de largura máxima, margem externa de apenas 8–20px, criando a sensação de painel pousado sobre a página. Seções respiram 96px no mobile e 128px a partir de sm.

O hero usa grade assimétrica `1.08fr / 0.92fr`: título, parágrafo e seis destaques (2x3) à esquerda, cartão de formulário à direita ocupando duas linhas. Em mobile tudo empilha, com o formulário logo após o parágrafo. Projetos em duas colunas a partir de md; planos em três a partir de lg; processo em lista vertical com linha de progresso e prova ao lado; FAQ como moldura `paper-2` de 32px contendo um palco à esquerda e o acordeão à direita.

Header fixo de 72px; `scroll-padding-top` de 5.5rem compensa as âncoras. Faixas `paper-2` com bordas `line` alternam com faixas `paper` para ritmo de seção.

## Elevation & Depth

Profundidade vem de camadas tonais (`paper` < `surface` < `surface-2`) e bordas de 1px, não de sombras estruturais. Sombras existem só como halo longo e difuso com spread negativo, para destacar o que flutua: o formulário no palco, a janela do projeto, o plano destacado e o botão de sinal. Nada de sombra curta e dura. O header ganha `backdrop-blur-md` e `paper/85` só depois de rolar.

### Shadow Vocabulary
- **Halo de Sinal** (`box-shadow: 0 10px 30px -12px rgb(var(--signal-2) / 0.7)`): embutido em `.btn-signal`. Variações de 24–30px no plano destacado e no ícone de marca.
- **Halo Flutuante** (`box-shadow: 0 30px 80px -40px rgb(0 0 0 / 0.6)`): cartão do formulário sobre o palco; família de 24–30px/-24 a -30px nas molduras de prova.
- **Anel de Estado** (`box-shadow: 0 0 0 4px rgb(var(--accent) / 0.2)`): ponto indicador ativo; 6px a 12% no marcador de etapa ativa.

### Named Rules
**The Border-First Rule.** Separação de superfícies é trabalho da borda `line` de 1px. Sombra só entra em elementos que flutuam sobre outra superfície, e sempre com spread negativo.

## Shapes

Cantos grandes e concêntricos. O palco tem 32px; cartões dentro dele 28px; molduras de prova 26px com mídia interna de 18–20px e padding de 12px, para que os raios se aninhem. Controles usam 16px (botões de bloco) ou 12px (campos, links de nav, filtros, poços de ícone). Pílulas totalmente arredondadas para o CTA do header, botões de ícone, selos e pontos. Balões de conversa desenhados cortam um canto (`rounded-bl-md`/`rounded-br-md`) para indicar o falante.

Assinaturas de forma: a grade de pontos (1px a cada 14px, `dot` a 22%) mascarada por gradiente radial ou linear; a faixa de luz inclinada (-18deg) no hero; o wordmark gigante "Azuos." no rodapé, em `accent`, com máscara que o dissolve na base.

## Components

### Buttons
Táteis e decididos; sobem 2px ao hover com `ease-out-expo`.
- **Shape:** bloco suavemente arredondado (16px) ou pílula (9999px).
- **Sinal (principal):** gradiente `signal` para `signal-2` a 100deg, texto `on-signal`, 600, 14×24px (16px vertical e largura total no formulário, com ícone à esquerda e disco de seta à direita). Hover: `translateY(-2px)` e `brightness(1.05)`.
- **Pílula de Tinta:** fundo `ink`, texto `paper`, 600 15px, 10×20px. CTA do header e da faixa "o próximo sistema pode ser o seu".
- **Secundário:** `surface` com borda `line`, texto `ink`; hover leva a borda a `accent/50`.
- **Ícone:** círculo de 40px, `surface`, borda `line`, texto `body`; hover borda `accent/50` e texto `ink`.
- **Foco:** `.focus-ring`, contorno de 2px `accent` com offset de 2px, em todo elemento interativo.

### Chips
- **Filtro:** 12px de raio, borda `line`, `surface`, texto `body` 14px 500, com contador tabular em `surface-2`. Ativo: borda `accent/50`, fundo `accent/15`, texto `ink`, contador `accent/25`.
- **Selo:** pílula `accent` com texto `on-signal` ("Mais popular"), ou `accent/15` com texto `accent` dentro das mini-interfaces.

### Cards / Containers
- **Corner Style:** 28px (cartões), 24px (faixas e painéis secundários), 32px (palco).
- **Background:** `surface`; destacado usa lavagem radial `scene` para `surface` e borda `accent/50`.
- **Shadow Strategy:** ver Border-First Rule; halo só no destacado.
- **Border:** 1px `line` sempre.
- **Internal Padding:** 28px, 32px a partir de sm; cartões com mídia usam 12px de moldura e 20px no texto.

### Inputs / Fields
- **Style:** 12px de raio, borda `line`, fundo `paper/60`, texto `ink` 15px, placeholder `muted`, 14×16px. Caret em `accent`.
- **Hover / Focus:** hover borda `accent/40`; foco borda `accent` com anel de 4px `accent/15`, sem outline.
- **Rótulo:** 14px 600 `ink`, com "obrigatório" em `muted` alinhado à direita. Contador de caracteres tabular em `muted`.

### Navigation
- **Desktop:** links 15px 500 em `body`, 12px de raio, 8×14px; ativo (via IntersectionObserver) ganha fundo `surface-2` e texto `ink`. Sem sublinhados.
- **Header:** 72px, fixo; transparente sobre `paper` no topo, `paper/85` com blur e borda `line` após rolar.
- **Mobile:** botão de ícone abre painel de tela cheia com links em Bricolage 24px 600, divididos por `line`, e botão de sinal ao final.

### Palco (Stage)
Painel de 32px com borda `line`, três gradientes empilhados de `scene` sobre `surface`, grade de pontos mascarada. Abre (hero) e fecha (rodapé) a página e ancora o lado esquerdo do FAQ. É o único lugar onde a lavagem violeta cobre uma área grande.

### Moldura de Prova
Cartão `surface` de 26px com 12px de padding contendo um poço de 18px em gradiente `scene` para `paper-2` com grade de pontos; dentro, uma mini-interface desenhada em código (janela, orçamento, kanban, conversa). Nos projetos, a janela de navegador simulada com três pontos `line` e URL em `muted` sobe 8px ao hover.

### Numeração de Etapas
Etapas do processo numeradas 01–04 em Bricolage tabular; a etapa em vista fica `accent` e o marcador da linha de progresso ganha anel de 6px.

## Do's and Don'ts

### Do:
- **Do** escrever todo título de seção em duas linhas pelo `SectionHeading`: afirmação em `ink`, resposta em `accent`.
- **Do** usar cores apenas por variável (`rgb(var(--token))` ou classes Tailwind do token) para que o tema claro funcione.
- **Do** separar superfícies com borda `line` de 1px e camadas `paper` / `surface` / `surface-2`.
- **Do** mostrar provas como mini-interfaces codificadas dentro da Moldura de Prova.
- **Do** aninhar raios: 32px palco, 28px cartão, 20px mídia, 12–16px controles.
- **Do** animar entradas com `rise` (0.9s, `cubic-bezier(0.16, 1, 0.3, 1)`) e respeitar `prefers-reduced-motion`.
- **Do** aplicar `.focus-ring` em todo elemento interativo.

### Don't:
- **Don't** usar o gradiente de sinal fora do botão de ação principal.
- **Don't** estruturar uma seção como grade centralizada de cartões iguais de ícone + título + parágrafo; serviços se mostram por Moldura de Prova, e os destaques do hero (ícone + título + link, alinhados à esquerda) são navegação, não conteúdo.
- **Don't** usar rótulos em caixa alta com tracking largo acima dos títulos.
- **Don't** usar sombras curtas e duras ou sombras para separar superfícies que a borda já separa.
- **Don't** introduzir cores literais de interface; só marcas de terceiros (#25D366) ficam em hex.
- **Don't** colocar Bricolage sem `tracking-display`, nem Geist em títulos.
