# 🎨 Ghostifier — Design System & Interface Specifications

O **Ghostifier** utiliza uma identidade visual elegante, escura e focada na cibersegurança e soberania de dados. O design system combina a paleta *Catppuccin Macchiato*, a tipografia variável *Satoshi*, micro-interações fluidas via *Framer Motion* e componentes modulares responsivos.

---

## 🔤 Tipografia

### Fonte Principal
- **Família de Fontes:** `Satoshi` (Variable Font, pesos 300 a 900) carregada via Fontshare CDN em `src/styles/fonts.css`.
- **Configuração no Tailwind:** `@theme inline` (`var(--font-sans)` e `var(--font-display)` apontam para `'Satoshi', system-ui, -apple-system, sans-serif`).

### Escala e Hierarquia Visual
- **H1 (Títulos Principais / Hero):** `text-4xl md:text-6xl font-extrabold tracking-tight text-white`
- **H2 (Títulos de Seções / Hub / Quiz):** `text-3xl md:text-4xl font-bold text-white tracking-tight`
- **H3 (Títulos de Cards / Ferramentas):** `text-xl font-bold text-white`
- **Corpo (Texto Principal):** `text-base text-[#cdd6f4] leading-relaxed`
- **Subtextos / Muted:** `text-sm text-[#a6adc8]` ou `text-xs text-gray-400`
- **Eyebrows / Badges:** `text-xs font-bold uppercase tracking-wider text-[#89b4fa]` (Cyan) ou `text-[#cba6f7]` (Lavender)

---

## 🎨 Paleta de Cores (Catppuccin Macchiato Theme)

O sistema opera primariamente em **Modo Escuro (Dark Mode por padrão)** para proporcionar baixo cansaço visual e estética moderna de privacidade digital.

### Cores Base de Superfície (Design Tokens)
- **Base Canvas (`#1e1e2e` / `bg-gray-950`):** Fundo principal da aplicação.
- **Mantle (`#181825` / `bg-gray-900`):** Fundo de áreas elevadas, cards e cabeçalhos.
- **Surface (`#27293d` / `bg-gray-850`):** Superfície para estados hover, caixas de diálogo e containers internos.
- **Surface2 (`#222235`):** Inputs de busca, campos de formulário e dropdowns.

### Cores de Destaque (Accents)
- **Primary Accent — Lavender (`#cba6f7`):** Usada para botões de ação principal (CTA), bordas de destaque, estado ativo de categorias e títulos em gradiente.
- **Secondary Accent — Cyan (`#89b4fa`):** Usada para etiquetas de categorias, ícones de destaque, sombras brilhantes (*glow*) e badges informativos.
- **Gold / Amber Accent (`#fab387` / `amber-500`):** Badge de ferramentas *Altamente Recomendadas* e estrelas do Score de Privacidade.
- **Success Green (`#a6e3a1` / `emerald-400`):** Usada em marcadores de *Prós* e selos *Open-Source*.
- **Danger / Red (`#f38ba8` / `rose-400`):** Usada em alertas, marcas substituídas e *Contras*.

---

## 🖥️ Arquitetura das Interfaces

### 1. Header & Navegação Superior
- **Efeito Glassmorphism:** `backdrop-blur-md bg-[#181825]/80 border-b border-gray-800/80` fixo no topo (`sticky top-0 z-50`).
- **Branding:** Logo vetorial `LogoSvg` acompanhada do título em gradiente Lavender/Cyan.
- **Ações:** Botões de alternância rápida entre a **Landing Page**, o **Quiz de Privacidade** e o **Hub de Alternativas**.
- **Menu Mobile:** Overlay responsivo com animação de deslize e fechamento rápido.

### 2. Landing Page & Hero Section
- **Hero Title:** Mensagem de impacto *"Aberto no código, invisível na rede"*.
- **Ilustração Fantasma (`GhostIllustration`):** Elemento gráfico vetorial animado com aura reluzente em iluminação difusa (`blur-[75px] bg-[#89b4fa]`).
- **Cards de Conscientização:** Grade interativa demonstrando a transição do aprisionamento tecnológico das Big Techs para a soberania de dados.

### 3. Quiz Interativo de Privacidade (Diagnóstico Digital)
- **Estrutura de Perguntas:** Interface focada em etapas com seleção interativa de opções.
- **Barra de Progresso:** Indicador visual em tempo real do progresso da avaliação.
- **Algoritmo do Score Invisível:** Classificação automática em 5 Níveis Ghost:
  1. 🔴 **Iniciante** (Maturidade inicial)
  2. 🟠 **Silhueta** (Consciência básica)
  3. 💛 **Sombra** (Práticas ativas de privacidade)
  4. 🟢 **Espectro** (Alto nível de soberania digital)
  5. 🟣 **Fantasma** (Privacidade máxima e desvinculação de rastreadores)
- **Recomendação Personalizada:** Exibição de diagnóstico detalhado com redirecionamento direto para as ferramentas recomendadas no Hub.

### 4. Hub de Alternativas (Directory Hub)
- **Barra de Pesquisa e Filtros:**
  - `SearchInput`: Campo de busca em tempo real com ícone e botão de limpeza (`X`).
  - `CustomDropdown`: Seletores customizados para ordenação (*Recomendado, Dificuldade, A-Z*) e por *Nível Ghost*.
- **Filtro de Categorias Horizontal:** Carrossel/grade de botões com ícones do *Lucide-React* (*Navegação, E-mail, Mensageria, Buscadores, IA, Produtividade, etc.*).
- **AlternativeCard (Card da Ferramenta):**
  - Header com logo via `ImageWithFallback` e indicação da ferramenta proprietária substituída.
  - Badges de características (*Open-Source*, *Sem Conta*, *Local-First*).
  - Medidor de **Dificuldade de Migração** (escala de 1 a 5).
  - Acordeão animado expansível com **Prós e Contras** detalhados.
  - Link externo com ícone e efeito de elevação no hover.
- **Estado de Carregamento:** Skeletons animados com efeito de pulsação (`animate-pulse`) durante a busca de dados do servidor backend Express.

---

## ✨ Animações e Micro-Interações

- **Framer Motion (`motion/react`):**
  - `FadeIn`: Componente global para revelação suave na rolagem de página (`opacity: 0, y: 28` ➔ `opacity: 1, y: 0`).
  - `AnimatePresence`: Suporte a transições de entrada e saída em modais, dropdowns e acordeões.
  - **Hover Effects:** Transição suave de borda, mudança de cor e elevação de cards no hover (`transition-all duration-200`).
