
# Modernização do Site da Feira dos Importados de Taguatinga

## Visão Geral do Projeto

Este projeto visa a **digitalização** e **modernização** do site da Feira dos Importados de Taguatinga, criando um diretório online funcional e acessível. O objetivo principal é facilitar a busca por lojas e produtos, além de centralizar e divulgar notícias e eventos da feira.

| Detalhe | Descrição |
| :--- | :--- |
| **Tema** | Digitalização e modernização do site Feira dos Importados de Taguatinga |
| **Objetivo** | Criar um diretório online atrativo para busca de lojas/produtos e divulgação de informações. |
| **Público-Alvo** | Consumidores, Lojistas e Visitantes em geral. |
| **Tecnologias** | HTML5, CSS3 (Flexbox/Grid), JavaScript. |
| **Status** | Protótipo e Estrutura Inicial Concluídos. |

## Justificativa

A modernização digital é crucial para:
* **Ampliar o Alcance:** Superar barreiras geográficas e atrair um público mais vasto.
* **Melhorar a Experiência:** Oferecer uma navegação intuitiva e um sistema de busca eficiente.
* **Fortalecer a Marca:** Estabelecer uma presença digital sólida e profissional.
* **Centralizar Informações:** Tornar a feira uma fonte única e confiável de informações.

## Equipe de Desenvolvimento

| Nome | Papel |
| :--- | :--- |
| **Ana Clara Lélis** | Desenvolvedora |
| **Diego Marcelo de Sousa** | Desenvolvedor |

## Design e Identidade Visual

O projeto segue uma identidade visual coesa e focada na usabilidade:

### Cores Principais
| Cor | Código | Significado / Uso |
| :--- | :--- | :--- |
| **Azul/Ciano** | `#00B8C9` | Confiança, Dinamismo e Elemento Primário. |
| **Laranja** | `#ED9B16` | Destaque, Ação (CTAs) e Elemento Secundário. |
| **Neutras** | Branco e Tons de Cinza | Legibilidade e Neutralidade. |

### Tipografia
* **Fonte:** Poppins (Google Fonts)
* **Estilo:** Moderna, altamente legível e versátil para títulos e corpo de texto.

### Layout e Componentes
* **Estrutura:** Uso de **Grid** e **Flexbox** para garantir uma estrutura de layout **responsiva**, organizada e clara em todos os dispositivos.
* **Elementos:** Ícones lineares e simples; botões com cores contrastantes e cantos arredondados para melhor usabilidade (UX).

## Estrutura do Repositório

O projeto está organizado com foco em clareza e manutenção:

```bash
Site_Feira_Dos_Importados_Tag/
├── css/
│   └── styles.css            # Estilos CSS principais (inclui responsividade)
├── img/                      # Diretório de imagens e ativos visuais
├── js/                       # Arquivos JavaScript para interatividade (Ex: script.js)
├── .gitattributes            # Configuração Git para tratamento de arquivos
├── index.html                # Página inicial (Home)
├── pagina_loja.html          # Página de listagem/detalhes de lojas
└── pagina_noticias.html      # Página de notícias e eventos
```

## Protótipo 

O design completo do projeto pode ser visualizado no Figma:

[**Acessar Protótipo Detalhado no Figma**](https://www.figma.com/design/k7QkSJmKcwijSkJKu7ek7H/Prototipo-Site?node-id=0-1&p=f&t=3SYhpRjURF8qGkYw-0)

## Como Executar o Projeto Localmente

Para visualizar e testar o site em sua máquina:

1. **Clone o Repositório:**
   ```bash
   git clone https://github.com/diegoomarcelo/Site_Feira_Dos_Importados_Tag.git
   ```
2. **Navegue até o Diretório:**
   ```bash
   cd Site_Feira_Dos_Importados_Tag
   ```
3. **Abra no Navegador:**
   Abra o arquivo `index.html` diretamente no seu navegador de preferência (Chrome, Firefox, etc.).

## Histórico de Desenvolvimento 

| Data | Etapa Realizada | Responsável | Observações |
| :--- | :--- | :--- | :--- |
| 08/10/2025 | Análise inicial e Definição de Objetivos | Ana e Diego | Início do planejamento e escopo. |
| 10/10/2025 | Levantamento de Elementos Visuais e Estrutura | Ana e Diego | Criação dos primeiros wireframes. |
| 11/10/2025 | Justificativas de Design e Análise de Usabilidade | Ana e Diego | Definição de cores, tipografia e princípios de UX. |
| 12/10/2025 | Revisão de HTML/CSS (Tags Semânticas, Grid/Flexbox) | Ana e Diego | Implementação da estrutura base e estilos. |
| 12/10/2025 | **Criação do README Consolidado** | Ana e Diego | Documentação inicial do projeto. |
| 23/10/2025 | Incluindo novos cards e iniciando codificação com JavaScript | Ana e Diego | Botões, cards e carrossel |
| 28/10/2025 | Incluindo Modal |Ana e Diego | Editando código HTML, CSS e programando com JavaScript. |
| 28/10/2025 | **Revisão e Aprimoramento do README** | Ana e Diego | Inclusão de detalhes técnicos e melhoria da estrutura. |

## ⏭️ Próximos Passos (Roadmap)

1. **Desenvolvimento Completo:** Finalizar a codificação de todas as páginas (`pagina_loja.html`, `pagina_noticias.html`) conforme o protótipo.
2. **Testes de Qualidade:** Realizar testes de usabilidade, acessibilidade (WCAG) e compatibilidade entre navegadores.
3. **Otimização:** Otimizar a performance (velocidade de carregamento) e a indexação (SEO).


## 📘 Parte 2 – Etapa 1: Revisão e Diagnóstico do Projeto Atual

Esta seção registra a revisão do projeto da Parte 1, seguindo o roteiro da disciplina. A partir dessa análise, foram identificados pontos fortes, elementos repetidos, problemas de layout e oportunidades de melhoria para a próxima etapa do desenvolvimento.

---

### O que já está funcionando bem?

- **Estrutura geral**
  - Projeto dividido em páginas bem definidas: Home (`index.html`), Lojas (`pagina_loja.html`) e Notícias (`pagina_noticias.html`).
  - Uso consistente de **CSS Grid** e **Flexbox** para organizar o layout.
  - Identidade visual uniforme, com as cores principais da Feira dos Importados e a fonte Poppins aplicada em todo o site.

- **Conteúdo e Navegação**
  - Header com logo, navegação e ações principais repetido nas páginas.
  - Na Home, o conteúdo está organizado em:
    - **Banner com busca** (formulário de pesquisa principal),
    - **Seção de categorias em destaque**,
    - **Carrossel de “Lojas Favoritas da Feira”** com vários cards de lojas.
  - Página de lojas com campo de busca, seletor de tipo de loja e filtros laterais (categorias e outros).
  - Página de notícias com um artigo em destaque e vários cards menores de notícias, organizados em grades.

- **Interatividade (JavaScript já implementado)**
  - Código JavaScript para um **carrossel de lojas favoritas**, usando:
    - Botões em formato de pílula (`.pill`),
    - Slides de conteúdo (`.slider-page`),
    - Dots de navegação (`#favDots .dot`).
  - Estrutura de **modal de boas-vindas** na Home:
    - HTML do modal (`#welcome-modal` e `#modal-overlay`),
    - Estilos específicos no CSS,
    - Funções no JavaScript para abrir e fechar o modal (via botão, X e clique no fundo).

- **Responsividade inicial**
  - CSS possui vários breakpoints importantes (`@media (max-width: 1024px)`, `900px`, `768px`, `600px`, `480px`).
  - Grades de cards e seções como `cats__grid`, `cards-row`, `cards` e `main-grid` se adaptam conforme a largura da tela, reduzindo o número de colunas.
  - O rodapé (`.footer-grid`) também é ajustado para coluna única em telas menores.

---

### 🔁 Elementos que se repetem e devem virar componentes

Estes elementos se repetem em todas (ou quase todas) as páginas e serão modularizados na Etapa 2:

- **Header completo**
  - Logo + menu + ações → repetido na Home, Lojas e Notícias.
- **Menu de navegação**
  - Links “INICIO”, “LOJAS” e “NOTÍCIAS”.
- **Footer completo**
  - Seções “Sobre”, “Informações”, “Atendimento”, horários, contatos e redes sociais.
- **Estruturas de cards**
  - Cards de lojas: mesma estrutura visual (imagem, título, localização, tags).
  - Cards de notícias: estrutura padronizada com imagem, título e resumo.
  Obs: Embora os cards também tenham estrutura repetida, nesta etapa seguiremos o mínimo obrigatório do roteiro, modularizando apenas o header e o footer.

**Obs:** Embora os cards também tenham estrutura repetida, nesta etapa seguiremos o mínimo obrigatório do roteiro, modularizando apenas o header e o footer.

Esses itens serão transformados em `componentes/header.html` e `componentes/footer.html`, conforme solicitado no roteiro.

---

### ⚠️ Onde o layout “quebra” ou fica estranho?

Durante testes em diferentes tamanhos de tela (principalmente entre **375px e 1024px**), foi possível perceber que ainda existem pontos que precisam de ajustes na responsividade:

- **Header em telas menores**
  - Dependendo da largura, o conjunto logo + menu + botões pode ficar muito apertado, quebrar de forma não planejada ou perder espaçamento entre os elementos.
  - Isso prejudica a navegação e a leitura no mobile.

- **Grades de cards (lojas e notícias)**
  - Em algumas larguras intermediárias, os cards podem:
    - Ficar com alturas muito diferentes,
    - Deixar “vazios” visuais na grade,
    - Deixar o texto mais espremido.
  - Apesar de funcionarem, visualmente ainda há espaço para melhorar.

- **Espaçamentos verticais no mobile**
  - Algumas seções ficam muito próximas, o que gera a sensação de conteúdo “colado” e cansa a leitura.
  - Ajustes de `margin` e `padding` em breakpoints menores ajudariam a dar mais “respiro” entre blocos.

- **Footer em telas pequenas**
  - O rodapé reúne muitas informações (texto, links, horários, contatos) em um espaço só.
  - Em telas pequenas, isso torna a leitura mais densa e cansativa.

- **CSS contém regras antigas não usadas**
  - Há classes definidas no CSS, como `.overlay`, `.banner` e `.search-box`, que não aparecem no HTML atual.
  - Essas regras parecem vir de versões anteriores da interface e hoje não são utilizadas, deixando o CSS mais difícil de manter.

Essas observações mostram que a responsividade ainda não está finalizada e justificam a necessidade da Etapa 5 (Consolidação da Responsividade).

---

### 💡 Melhorias que fazem diferença real para o usuário

- **Experiência de navegação mais fluida**
  - A modularização do header e footer vai facilitar manter o site sempre consistente em todas as páginas, o que é essencial para um diretório de lojas.

- **Acessibilidade aprimorada**
  - Complementar o que já existe com HTML semântico (`<main>`, `<section>`, etc.), foco visível para teclado e labels mais claros em formulários melhora a experiência de pessoas com deficiência ou que navegam só com teclado.

- **Melhor usabilidade no celular**
  - Ajustes específicos nos grids, cards e header para telas menores deixam a navegação mais confortável, principalmente para quem acessa o site rapidamente pelo celular dentro da própria feira.

- **Código mais limpo e profissional**
  - Modularizar componentes e remover CSS que não está sendo usado reduz a chance de erro, facilita futuras alterações e torna o projeto mais profissional.

- **Imagem mais confiável para o pequeno negócio**
  - Um site organizado, responsivo e agradável transmite mais seriedade e ajuda a fortalecer a presença digital da Feira dos Importados de Taguatinga.

## Etapa 2.1: Identificação de Componentes Reutilizáveis

Antes de iniciar a modularização, analisamos cuidadosamente todas as páginas do projeto (`index.html`, `pagina_loja.html` e `pagina_noticias.html`) para identificar quais elementos se repetem e podem ser convertidos em componentes reutilizáveis. Essa etapa segue o objetivo do roteiro: reduzir repetição, facilitar manutenção e centralizar elementos estruturais.

Após a análise, foram identificados os seguintes componentes:

---

### ✔️ 1. Header (cabeçalho completo)
O header está presente nas 3 páginas do site, sempre com a mesma estrutura:

- Logo da Feira dos Importados  
- Menu principal (INICIO, LOJAS, NOTÍCIAS)  
- Botões/ações adicionais  

Embora cada página tenha pequenas variações visuais, a estrutura principal do header permanece a mesma, o que torna esse elemento ideal para ser modularizado.

**Por que modularizar?**  
Facilita a manutenção: ao alterar um link, logo ou ação, a mudança automaticamente se reflete em todo o site.

---

### ✔️ 2. Menu de Navegação (nav)
A navegação principal é sempre igual:

- Links: **INICIO**, **LOJAS**, **NOTÍCIAS**
- Organização em lista
- Mesmas classes CSS e estrutura HTML

Embora faça parte do header, registramos como item separado porque é um componente essencial para a navegabilidade.

**Por que modularizar?**
Garantir consistência e evitar divergências entre páginas.

---

### ✔️ 3. Footer (rodapé completo)
O rodapé contém:

- Logo e nome da feira  
- Informações institucionais  
- Contatos e horários  
- Seções “Sobre”, “Informações” e “Atendimento”  
- Ícones e links de redes sociais  

Essa estrutura aparece de forma idêntica nas 3 páginas.

**Por que modularizar?**  
Assim como o header, ele é grande e repetitivo; manter três versões diferentes pode gerar erros e inconsistências.

---

### ✔️ 4. Estruturas de Cards
Tanto na Home quanto nas páginas internas, existem dois padrões de cards:

- **Cards de Lojas**  
  Estrutura repetida com imagem, título, localização, tags e layout consistente.

- **Cards de Notícias**  
  Com imagem, título e resumo, seguindo a mesma lógica estrutural.

**Observação:**  
Embora os cards também possam virar componentes, nesta etapa seguiremos o mínimo solicitado no roteiro — modularizando apenas **header** e **footer**. Os cards serão tratados como possível melhoria futura.

---

## – Etapa 2.2: Criação da Estrutura de Componentes

Após identificar os elementos reutilizáveis, iniciamos a modularização do código HTML criando uma pasta específica para componentes e separando o cabeçalho e o rodapé em arquivos próprios.

### 📁 Criação da pasta `componentes/`

Na raiz do projeto foi criada a pasta:

- `componentes/`

O objetivo dessa pasta é centralizar todos os blocos de interface que serão reutilizados em mais de uma página.

### Separação do `header.html`

No arquivo `index.html`, o bloco correspondente ao cabeçalho (do `<header class="navbar">` até `</header>`) foi recortado e movido para um novo arquivo:

- `componentes/header.html`

Esse arquivo contém apenas o HTML do cabeçalho, sem tags de estrutura global como `<!DOCTYPE>`, `<html>`, `<head>` ou `<body>`.

Nas páginas:

- `index.html`
- `pagina_loja.html`
- `pagina_noticias.html`

o cabeçalho original foi substituído por um container:

```html
<div id="header-container"></div> 

```

### Separação do `footer.html`

Da mesma forma que o header, o bloco do rodapé (do `<footer class="footer">` até `</footer>`) foi movido para o arquivo:

- `componentes/footer.html`

Assim como o header, o arquivo contém apenas o conteúdo do footer, sem tags como `<html>` ou `<body>`.

Nas páginas:

- `index.html`
- `pagina_loja.html`
- `pagina_noticias.html`

o rodapé original foi substituído pelo container:

```html
<div id="footer-container"></div>
```
