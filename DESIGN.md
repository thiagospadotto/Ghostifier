# Design System

## Typography

### Font Families
- **Display (Headings):** `Outfit`, sans-serif (used for display, H1, H2, H3, H4 titles to evoke modern elegance)
- **Sans (Body / Interface):** `Plus Jakarta Sans`, sans-serif (used for paragraph descriptions, labels, button text, and technical tables)

### Scale & Hierarchy
- **H1 (Page Titles):** `text-4xl md:text-5xl font-extrabold tracking-tight`
- **H2 (Section Titles):** `text-3xl md:text-4xl font-semibold tracking-tight`
- **H3 (Card Titles):** `text-2xl font-semibold`
- **Body Text:** `text-base text-gray-400 leading-relaxed`
- **Muted Labels / Eyebrows:** `text-xs font-bold tracking-[1.2px] uppercase text-[#89b4fa]`

---

## Color Palette

All colors are configured in `theme.css` via custom CSS custom properties and mapped to Tailwind colors.

### Dark Mode (Core Theme)
- **Background (Canvas):** `oklch(0.145 0 0)` — Deep dark carbon gray for low eye-strain and professional protection aesthetic.
- **Foreground (Text):** `oklch(0.985 0 0)` — Clean, soft off-white.
- **Primary Accent (Lavender):** `#cba6f7` — Used for main buttons, primary highlights, and brand gradients.
- **Secondary Accent (Cyan):** `#89b4fa` — Used for category tabs, tags, and informational eyebrows.
- **Card Background:** `oklch(0.145 0 0)` / `bg-gray-900`
- **Border / Muted:** `oklch(0.269 0 0)` / `border-gray-800`
- **Gold Highlight (Recommended):** `border-amber-500/40` with `text-amber-500` for highly-recommended tools.

---

## Layout & Components

### Page Wrapper Bounds
- **Standard Width & Alignments:** `max-w-7xl mx-auto px-6 md:px-10` applied to Page Headers, Main Content Sections, and Quiz elements.

### Cards Grid Layout
- **Responsiveness Grid:** `grid grid-cols-1 md:grid-cols-2 gap-6` to ensure cards never squeeze long texts or compatibility badges.

### Sticky Sidebar Panel
- Persistent navigation panel on desktop viewports (`w-72 shrink-0 lg:sticky lg:top-28`) displaying categories, counts, and the recommended switch toggle.
