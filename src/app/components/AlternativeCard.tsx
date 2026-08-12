import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, X, ExternalLink, ChevronDown, ChevronUp, Code2, Lock, UserX, User, DollarSign, Ghost } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

export interface AlternativeApp {
  id: number;
  nomeProprietario: string;
  nomeAlternativa: string;
  categoria: "Armazenamento" | "Buscadores" | "Criatividade" | "Dev & Ferramentas" | "E-mail" | "Extensões" | "Front-ends alternativos" | "Infraestrutura" | "Inteligência Artificial" | "Mensageria" | "Mídia" | "Navegação" | "Privacidade & Info" | "Produtividade" | "Rede & DNS" | "Segurança";
  logoUrl: string;
  descricao: string;
  link: string;
  dificuldade: number;
  isOpenSource: boolean;
  requerConta: boolean;
  pros: string[];
  contras: string[];
  modeloNegocio: string;
  isRecomendado?: boolean;
  privacyScore?: number;
  plataformas?: string[];
}


const categoryIcons: Record<string, string> = {
  "Navegação": "🌐",
  "Buscadores": "🔍",
  "Inteligência Artificial": "✨",
  "E-mail": "📧",
  "Mensageria": "💬",
  "Mídia": "🎬",
  "Front-ends alternativos": "🔄",
  "Criatividade": "🎨",
  "Produtividade": "📋",
  "Armazenamento": "💾",
  "Segurança": "🔐",
  "Rede & DNS": "🔌",
  "Extensões": "🧩",
  "Privacidade & Info": "🕵️",
  "Infraestrutura": "🖥️",
  "Dev & Ferramentas": "🛠️",
};

const difficultyLabels = [
  "", // 0
  "Muito Fácil",
  "Fácil",
  "Média",
  "Difícil",
  "Muito Difícil"
];

const difficultyColors = [
  "",
  "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  "text-amber-400 bg-amber-500/10 border-amber-500/20",
  "text-rose-400 bg-rose-500/10 border-rose-500/20",
  "text-rose-400 bg-rose-500/10 border-rose-500/20"
];


function PrivacyScoreBar({ score }: { score: number }) {
  const pct = (score / 10) * 100;

  const getScoreColor = (s: number) => {
    if (s <= 3) return { bar: "#f38ba8", bg: "bg-[#f38ba8]", text: "text-[#f38ba8]", label: "Invasivo", glow: "rgba(243,139,168,0.3)" };
    if (s <= 6) return { bar: "#f9e2af", bg: "bg-[#f9e2af]", text: "text-[#f9e2af]", label: "Moderado", glow: "rgba(249,226,175,0.3)" };
    if (s <= 8) return { bar: "#89b4fa", bg: "bg-[#89b4fa]", text: "text-[#89b4fa]", label: "Bom", glow: "rgba(137,180,250,0.3)" };
    return { bar: "#a6e3a1", bg: "bg-[#a6e3a1]", text: "text-[#a6e3a1]", label: "Extremo", glow: "rgba(166,227,161,0.35)" };
  };

  const colors = getScoreColor(score);

  return (
    <div className="relative z-10 flex flex-col gap-2 bg-gray-950/40 border border-gray-900/60 p-3 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Ghost size={11} style={{ color: colors.bar }} />
          <span className="text-[9px] uppercase font-bold text-gray-500 tracking-wider">
            Índice de Transparência
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className={`text-[10px] font-bold tracking-wide ${colors.text}`}>
            {colors.label}
          </span>
          <span className={`text-xs font-extrabold tabular-nums ${colors.text}`}>
            {score}<span className="text-[9px] font-semibold text-gray-600"></span>
          </span>
        </div>
      </div>

      {/* Score track */}
      <div className="relative h-2 rounded-full overflow-hidden bg-gray-900 border border-gray-800/60">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${colors.bar}88, ${colors.bar})`,
            boxShadow: `0 0 8px ${colors.glow}`,
          }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        />
      </div>
      <div className="flex justify-between px-0.5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
          <div
            key={n}
            className={`flex flex-col items-center gap-0.5`}
          >
            <div
              className={`w-px h-1 rounded-full transition-colors duration-300 ${
                n <= score ? `opacity-70 ${colors.bg}` : "bg-gray-800 opacity-40"
              }`}
            />
            <span
              className={`text-[8px] tabular-nums leading-none transition-colors duration-300 ${
                n <= score ? `font-bold opacity-80 ${colors.text}` : "text-gray-700 font-normal"
              }`}
            >
              {n}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AlternativeCard({ app }: { app: AlternativeApp }) {
  const [expanded, setExpanded] = useState(false);
  const icon = categoryIcons[app.categoria] || "⚙️";
  const glowColor = app.isRecomendado 
    ? "bg-amber-500" 
    : (app.categoria === "Navegação" || app.categoria === "Armazenamento" ? "bg-[#89b4fa]" : "bg-[#cba6f7]");

  const getShortModel = (model: string) => {
    if (!model) return "";
    const lower = model.toLowerCase();
    if (
      lower.includes("freemium") ||
      lower.includes("premium") ||
      lower.includes("assinatura") ||
      lower.includes("pago") ||
      lower.includes("comercial") ||
      lower.includes("flat") ||
      lower.includes("open-core") ||
      lower.includes("cloud") ||
      lower.includes("sync") ||
      lower.includes("studio") ||
      lower.includes("mobile") ||
      lower.includes("desktop grátis")
    ) {
      return "Freemium";
    }
    if (lower.includes("doação") || lower.includes("doações")) {
      return "Doações";
    }
    if (lower.includes("autohospedado") || lower.includes("self-hosted")) {
      return "Autohospedado";
    }
    if (lower.includes("hardware") || lower.includes("yubikey") || lower.includes("nitrokey") || lower.includes("onlykey")) {
      return "Hardware";
    }
    if (lower.includes("recompensas") || lower.includes("publicidade") || lower.includes("anúncios") || lower.includes("contexto")) {
      return "Anúncios";
    }
    if (lower.includes("gratuito")) {
      return "Gratuito";
    }
    const part = model.split(/[\/\(-]/)[0].trim();
    const short = part.charAt(0).toUpperCase() + part.slice(1);
    if (short.length > 12) {
      return short.substring(0, 12) + "...";
    }
    return short;
  };


  const getModelColor = (model: string) => {
    const lower = model.toLowerCase();
    if (
      lower.includes("freemium") ||
      lower.includes("premium") ||
      lower.includes("assinatura") ||
      lower.includes("pago") ||
      lower.includes("comercial") ||
      lower.includes("flat") ||
      lower.includes("open-core") ||
      lower.includes("cloud") ||
      lower.includes("sync") ||
      lower.includes("studio") ||
      lower.includes("mobile") ||
      lower.includes("desktop grátis")
    ) {
      return "text-amber-400 bg-amber-500/10 border-amber-500/20";
    }

    if (lower.includes("publicidade") || lower.includes("anúncios") || lower.includes("recompensas")) {
      return "text-rose-400 bg-rose-500/10 border-rose-500/20";
    }

    if (lower.includes("assinatura paga") || (lower.includes("pago") && !lower.includes("gratuito") && !lower.includes("doação"))) {
      return "text-rose-400 bg-rose-500/10 border-rose-500/20";
    }

    if (lower.includes("doações") || lower.includes("doação")) {
      return "text-amber-400 bg-amber-500/10 border-amber-500/20";
    }
    return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
  };


  return (
    <motion.div
      transition={{ duration: 0.2 }}
      className={`relative overflow-hidden rounded-2xl p-6 flex flex-col gap-4 h-full bg-gradient-to-br from-gray-900 to-gray-950/80 border backdrop-blur-md transition-all duration-300 ${
        app.isRecomendado
          ? "border-amber-500/40 hover:border-amber-500/60 shadow-[0_0_20px_rgba(245,158,11,0.06)]"
          : "border-gray-800 hover:border-gray-700/80 shadow-2xl"
      }`}
    >
      {app.isRecomendado && (
        <span className="absolute top-4 right-4 z-20 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 backdrop-blur-sm select-none">
          ⭐ Recomendado
        </span>
      )}

      {/* Glow / Gradient Blur */}
      <div className={`absolute rounded-full blur-[60px] pointer-events-none w-48 h-48 ${glowColor} -top-12 -right-12 ${
        app.isRecomendado ? "opacity-[0.08]" : "opacity-[0.06]"
      }`} />

      {/* Header Info */}
      <div className="relative z-10 flex items-start gap-4">
        {/* App Logo */}
        <div className="shrink-0 w-14 h-14 rounded-2xl bg-gray-950 border border-gray-850/10 flex items-center justify-center p-2 overflow-hidden">
          {app.logoUrl ? (
            <ImageWithFallback src={app.logoUrl} alt={`${app.nomeAlternativa} logo`} className="w-full h-full object-contain" />
          ) : (
            <span className="text-2xl">{icon}</span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className={`flex flex-wrap gap-1.5 items-center mb-1 ${app.isRecomendado ? "pr-24" : ""}`}>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gray-850 text-gray-300 border border-gray-800">
              {icon} {app.categoria}
            </span>
          </div>
          <h3 className={`text-lg font-bold text-white tracking-tight truncate ${app.isRecomendado ? "pr-24" : ""}`}>
            {app.nomeAlternativa}
          </h3>
          <p className="text-xs text-gray-400">
            Substitui: <span className="text-gray-300 font-medium">{app.nomeProprietario}</span>
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="relative z-10 text-xs text-gray-400 leading-relaxed line-clamp-3 overflow-hidden">
        {app.descricao}
      </p>

      {/* Structured Specifications Grid */}
      <div className="relative z-10 grid grid-cols-2 gap-3 bg-gray-950/40 border border-gray-900/60 p-3 rounded-xl">
        {/* License */}
        <div className="flex flex-col gap-1">
          <span className="text-[9px] uppercase font-bold text-gray-500 tracking-wider">Licença</span>
          <span className={`inline-flex items-center gap-1 self-start px-2 py-0.5 rounded text-[10px] font-bold border leading-none ${
            app.isOpenSource 
              ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" 
              : "text-rose-400 bg-rose-500/10 border-rose-500/20"
          }`}>
            {app.isOpenSource ? <Code2 size={9} /> : <Lock size={9} />}
            {app.isOpenSource ? "Open Source" : "Proprietário"}
          </span>
        </div>

        {/* Access */}
        <div className="flex flex-col gap-1">
          <span className="text-[9px] uppercase font-bold text-gray-500 tracking-wider">Acesso</span>
          <span className={`inline-flex items-center gap-1 self-start px-2 py-0.5 rounded text-[10px] font-bold border leading-none ${
            app.requerConta 
              ? "text-amber-400 bg-amber-500/10 border-amber-500/20" 
              : "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
          }`}>
            {app.requerConta ? <User size={9} /> : <UserX size={9} />}
            {app.requerConta ? "Conta necessária" : "Sem cadastro"}
          </span>
        </div>

        {/* Difficulty */}
        <div className="flex flex-col gap-1">
          <span className="text-[9px] uppercase font-bold text-gray-500 tracking-wider">Migração</span>
          <span className={`inline-flex items-center self-start gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold border leading-none ${difficultyColors[app.dificuldade]}`}>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((level) => (
                <div 
                  key={level}
                  className={`w-1 h-1 rounded-full ${
                    level <= app.dificuldade 
                      ? (app.dificuldade <= 2 ? "bg-emerald-400" : app.dificuldade === 3 ? "bg-amber-400" : "bg-rose-400") 
                      : "bg-gray-800"
                  }`}
                />
              ))}
            </div>
            <span>{difficultyLabels[app.dificuldade]}</span>
          </span>
        </div>

        {/* Business Model */}
        <div className="flex flex-col gap-1 min-w-0">
          <span className="text-[9px] uppercase font-bold text-gray-500 tracking-wider">Esquema</span>
          <span className={`inline-flex items-center gap-1 self-start px-2 py-0.5 rounded text-[10px] font-bold border leading-none truncate max-w-full ${getModelColor(app.modeloNegocio)}`} title={app.modeloNegocio}>
            <DollarSign size={9} />
            {getShortModel(app.modeloNegocio)}
          </span>
        </div>

        {/* Disponível em */}
        {app.plataformas && app.plataformas.length > 0 && (
          <div className="flex flex-col gap-1 col-span-2 border-t border-gray-900/60 pt-2.5 mt-1.5">
            <span className="text-[9px] uppercase font-bold text-gray-500 tracking-wider">Disponível em</span>
            <div className="flex flex-wrap gap-1.5 mt-0.5">
              {app.plataformas.map((platform) => {
                let logoSvg = null;
                if (platform === "Android") {
                  logoSvg = (
                    <svg className="w-3 h-3 text-[#3DDC84] fill-current" viewBox="0 0 24 24">
                      <path d="M17.52 14.37c-.36 0-.65-.29-.65-.65 0-.36.29-.65.65-.65s.65.29.65.65c0 .36-.29.65-.65.65zM6.48 14.37c-.36 0-.65-.29-.65-.65 0-.36.29-.65.65-.65s.65.29.65.65c0 .36-.29.65-.65.65zm11.36-5.47l1.72-2.98a.18.18 0 0 0-.07-.25.18.18 0 0 0-.25.07l-1.74 3.02C16.1 8.32 14.15 8 12 8c-2.15 0-4.1.32-5.52.76L4.74 5.74a.18.18 0 0 0-.25-.07.18.18 0 0 0-.07.25l1.72 2.98C3.52 10.45 1.5 13.08 1 16.32h22c-.5-3.24-2.52-5.87-5.16-7.42z"/>
                    </svg>
                  );
                } else if (platform === "iOS" || platform === "macOS") {
                  logoSvg = (
                    <svg className="w-3 h-3 text-[#F5F5F7] fill-current" viewBox="0 0 24 24">
                      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.51 12.06 1.005 1.45 2.187 3.068 3.766 3.008 1.522-.06 2.1-.98 3.945-.98 1.83 0 2.35.98 3.949.95 1.62-.03 2.66-1.46 3.655-2.9 1.15-1.68 1.625-3.3 1.655-3.39-.035-.015-3.175-1.22-3.205-4.81-.03-3.0 2.47-4.44 2.58-4.515-1.41-2.07-3.585-2.3-4.325-2.35-1.9-.15-3.21 1.05-3.96 1.05zm1.536-4.55c.813-1.0 1.36-2.356 1.21-3.72-1.168.05-2.59.78-3.428 1.76-.732.847-1.373 2.22-1.202 3.555 1.3.1 2.6-.66 3.42-1.595z"/>
                    </svg>
                  );
                } else if (platform === "Windows") {
                  logoSvg = (
                    <svg className="w-3 h-3 text-[#0078D4] fill-current" viewBox="0 0 23 23">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M20 10.873V20L8.479 18.537L8.48 10.873H20ZM6.88 10.873L6.879 18.334L0 17.461V10.873H6.88ZM20 9.273H8.48L8.479 1.463L20 0V9.273ZM6.879 1.666L6.88 9.273H0V2.539L6.879 1.666Z"/>
                    </svg>
                  );
                } else if (platform === "Linux") {
                  logoSvg = (
                    <svg className="w-3 h-3 text-[#FCC624] fill-current" viewBox="0 0 24 24">
                      <path d="M5.60742 5.14243L5.65742 6.29243L4.85742 7.79243L3.60742 10.2424L3.35742 12.2924L4.25742 15.1924L6.30742 16.3424H9.40742L12.3074 14.1424L13.6074 10.6924L10.6074 7.04243L9.75742 4.99243L5.60742 5.14243Z" fill="#ECEFF1"/>
<path d="M12.7074 7.99251C11.9074 6.84251 11.2574 6.14251 10.9074 4.69251C10.5574 3.24251 11.0074 3.64251 10.7074 2.39251C10.5574 1.74251 10.3074 1.29251 10.0574 0.942506C9.75739 0.592506 9.40739 0.392506 9.20739 0.342506C8.75739 0.092506 7.7074 -0.307494 6.4074 0.392506C5.0574 1.09251 5.20739 2.59251 5.45739 5.64251C5.45739 5.84251 5.40739 6.09251 5.30739 6.29251C5.10739 6.74251 4.75739 7.14251 4.45739 7.49251C4.10739 7.99251 3.75739 8.49251 3.50739 9.04251C2.90739 10.1925 2.35739 11.6425 2.50739 12.1925C2.75739 12.1425 5.9074 16.9425 5.9074 17.0425C6.1074 16.9925 6.95739 16.9925 7.70739 16.9925C8.75739 16.9425 9.35739 16.8925 10.2074 17.0925C10.2074 16.9425 10.1574 16.7925 10.1574 16.6425C10.1574 16.3425 10.2074 16.0925 10.2574 15.7425C10.3074 15.4925 10.3574 15.2425 10.4074 14.9425C9.9074 15.3925 9.0074 15.8925 8.1574 16.0425C7.4074 16.1925 6.1574 15.9425 5.55739 15.1925C5.60739 15.1925 5.70739 15.1925 5.75739 15.1425C5.90739 15.0925 6.0574 15.0425 6.1074 14.9425C6.2574 14.6925 6.15739 14.4425 6.05739 14.2925C5.95739 14.1425 5.2074 13.5925 4.8574 13.2925C4.5074 12.9925 4.3074 12.8425 4.1074 12.6425L3.70739 12.2425C3.60739 12.1425 3.55739 12.0425 3.50739 11.9925C3.40739 11.7425 3.35739 11.4425 3.40739 11.0425C3.45739 10.4925 3.6574 10.0425 3.9074 9.54251C4.0074 9.34251 4.25739 8.94251 4.25739 8.94251C4.25739 8.94251 3.4074 11.0425 3.8574 11.6925C3.8574 11.6925 3.9074 11.0425 4.1074 10.3925C4.2574 9.94251 4.50739 9.29251 4.80739 8.94251C5.10739 8.59251 5.8574 7.29251 5.9074 6.49251C5.9074 6.14251 5.95739 5.79251 5.95739 5.54251C5.75739 5.34251 9.25739 4.84251 9.45739 5.39251C9.50739 5.59251 10.2074 7.39251 10.6074 8.34251C10.8074 8.79251 11.0574 9.19251 11.2074 9.69251C11.3574 10.2425 11.4574 10.9925 11.4574 11.7425C11.4574 11.8925 11.4574 12.1425 11.4074 12.3925C11.5074 12.3925 13.4574 10.2925 11.1574 8.54251C11.1574 8.54251 12.5574 9.19251 12.6074 10.4925C12.6574 11.5425 12.2074 12.3925 12.1074 12.5425C12.1574 12.5425 13.1574 12.9925 13.2074 12.9925C13.4074 12.9925 13.8074 12.8425 13.8074 12.8425C13.8574 12.6925 14.0074 12.2925 14.0074 12.1425C14.3574 10.9925 13.5074 9.14251 12.7074 7.99251Z" fill="#263238"/>
<path d="M6.35752 4.69238C6.71651 4.69238 7.00752 4.24467 7.00752 3.69238C7.00752 3.1401 6.71651 2.69238 6.35752 2.69238C5.99854 2.69238 5.70752 3.1401 5.70752 3.69238C5.70752 4.24467 5.99854 4.69238 6.35752 4.69238Z" fill="#ECEFF1"/>
<path d="M8.60732 4.79243C9.07677 4.79243 9.45732 4.27756 9.45732 3.64243C9.45732 3.0073 9.07677 2.49243 8.60732 2.49243C8.13788 2.49243 7.75732 3.0073 7.75732 3.64243C7.75732 4.27756 8.13788 4.79243 8.60732 4.79243Z" fill="#ECEFF1"/>
<path d="M6.7208 3.7608C6.67924 3.43205 6.49009 3.18519 6.29832 3.20943C6.10654 3.23367 5.98477 3.51983 6.02632 3.84858C6.06788 4.17734 6.25703 4.4242 6.4488 4.39996C6.64057 4.37572 6.76235 4.08956 6.7208 3.7608Z" fill="#212121"/>
<path d="M8.55762 4.49238C8.83376 4.49238 9.05762 4.20137 9.05762 3.84238C9.05762 3.4834 8.83376 3.19238 8.55762 3.19238C8.28147 3.19238 8.05762 3.4834 8.05762 3.84238C8.05762 4.20137 8.28147 4.49238 8.55762 4.49238Z" fill="#212121"/>
<path d="M15.2077 14.8425C15.0077 14.7425 14.6577 14.5925 14.3577 14.1425C14.2077 13.8925 14.2577 13.1925 14.0077 12.8925C13.8577 12.6925 13.6577 12.7925 13.6077 12.7925C13.1577 12.8925 12.1077 13.5925 11.4077 12.7925C11.3077 12.6925 11.1577 12.5425 10.9077 12.5425C10.6577 12.5425 10.5577 12.6425 10.4577 12.8425C10.3577 13.0425 10.3577 13.1925 10.3577 13.6925C10.3577 14.0925 10.3577 14.5425 10.3077 14.8925C10.2077 15.7425 10.0577 16.2425 10.0577 16.7425C10.0577 17.2925 10.2077 17.6425 10.4077 17.7925C10.5577 17.9425 10.8077 18.0425 11.3577 18.0425C11.9077 18.0425 12.2577 17.8425 12.6077 17.4925C12.8577 17.2425 13.0577 17.1425 13.7577 16.6425C14.3077 16.2925 15.1577 15.8425 15.3077 15.6925C15.4077 15.5925 15.5577 15.5425 15.5577 15.2425C15.5577 14.9925 15.3577 14.8925 15.2077 14.8425ZM5.15774 14.9925C4.65774 14.1925 4.60773 14.0425 4.25773 13.5425C3.95773 13.0425 3.30773 12.0925 2.90773 12.0925C2.60773 12.0925 2.45773 12.2425 2.25773 12.4425C2.05773 12.6425 1.85773 13.0925 1.50773 13.3425C1.20773 13.5925 0.357735 13.5425 0.157735 13.8425C-0.0422651 14.1425 0.357735 14.5925 0.357735 15.3425C0.357735 15.6425 0.107735 15.8425 0.057735 16.0425C0.00773503 16.2925 -0.042265 16.4425 0.057735 16.6425C0.257735 16.9425 0.507735 17.0425 2.20774 17.3925C3.10774 17.5925 3.95773 18.0925 4.50773 18.1425C5.05773 18.1925 6.00773 18.1425 6.00773 16.7925C6.05773 15.9925 5.60774 15.7925 5.15774 14.9925ZM6.10774 5.94248C5.80774 5.74248 5.55773 5.54248 5.55773 5.24248C5.55773 4.94248 5.75773 4.84248 6.05773 4.59248C6.10773 4.54248 6.65773 4.04248 7.20773 4.04248C7.75773 4.04248 8.40774 4.39248 8.65774 4.49248C9.10774 4.59248 9.55774 4.69248 9.50774 5.04248C9.45774 5.54248 9.40774 5.64248 8.90774 5.89248C8.55774 5.99248 7.90773 6.54248 7.45773 6.54248C7.25773 6.54248 6.95773 6.54248 6.75773 6.49248C6.60773 6.44248 6.35774 6.19248 6.10774 5.94248Z" fill="#FFC107"/>
<path d="M6.00785 5.54258C6.10785 5.64258 6.25785 5.74258 6.40785 5.79258C6.50785 5.84258 6.65785 5.89258 6.65785 5.89258H7.10785C7.35785 5.89258 7.70785 5.79258 8.05785 5.59258C8.40785 5.44258 8.45785 5.34258 8.70785 5.24258C8.95785 5.09258 9.20785 4.94258 9.10785 4.89258C9.00785 4.84258 8.90785 4.89258 8.55785 5.09258C8.25785 5.29258 8.00785 5.39258 7.70785 5.54258C7.55785 5.59258 7.35785 5.69258 7.20785 5.69258H6.75785C6.60785 5.69258 6.50785 5.64258 6.35785 5.59258C6.25785 5.54258 6.20785 5.49258 6.15785 5.49258C6.05785 5.44258 5.85785 5.24258 5.75785 5.19258C5.75785 5.19258 5.65785 5.19258 5.70785 5.24258L6.00785 5.54258ZM7.50785 4.44258C7.55785 4.54258 7.65785 4.54258 7.70785 4.59258C7.75785 4.64258 7.80785 4.64258 7.80785 4.64258C7.85785 4.59258 7.80785 4.49258 7.75785 4.49258C7.75785 4.39258 7.50785 4.39258 7.50785 4.44258ZM6.70785 4.54258C6.70785 4.59258 6.80785 4.64258 6.80785 4.59258C6.85785 4.54258 6.90785 4.49258 6.95785 4.49258C7.05785 4.44258 7.00785 4.39258 6.85785 4.39258C6.75785 4.44258 6.75785 4.49258 6.70785 4.54258Z" fill="#634703"/>
<path d="M11.5574 13.3925V13.5425C11.6574 13.7425 11.9074 13.7925 12.1074 13.7925C12.4074 13.7925 12.7074 13.5925 12.8574 13.3925C12.8574 13.3425 12.9074 13.2925 12.9574 13.2425C13.0574 13.0925 13.1074 12.9925 13.1574 12.9425C13.1574 12.9425 13.1074 12.8925 13.1074 12.8425C13.0574 12.7425 12.9074 12.6425 12.7074 12.5925C12.5574 12.5425 12.3074 12.4925 12.2074 12.4925C11.7574 12.4425 11.5074 12.5925 11.3574 12.7425C11.3574 12.7425 11.4074 12.7425 11.4074 12.7925C11.5074 12.8925 11.5574 12.9925 11.5574 13.1425C11.6074 13.2425 11.5574 13.2925 11.5574 13.3925Z" fill="#455A64"/>
                    </svg>
                  );
                } else {
                  logoSvg = (
                    <svg className="w-3 h-3 text-gray-400 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      <path d="M2 12h20" />
                    </svg>
                  );
                }
                
                return (
                  <span 
                    key={platform} 
                    className="inline-flex items-center gap-1.5 px-2 py-0.75 rounded text-[10px] font-bold bg-gray-950/80 border border-gray-900 text-gray-300 hover:text-white transition-colors"
                  >
                    {logoSvg}
                    <span>{platform}</span>
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>


      {/* Privacy Score Bar */}
      {app.privacyScore !== undefined && (
        <PrivacyScoreBar score={app.privacyScore} />
      )}

      {/* Expandable Pros & Cons */}
      <div className="relative z-10 flex flex-col mt-2">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center justify-between w-full py-1 text-xs font-bold text-gray-400 hover:text-white transition-colors duration-150 cursor-pointer"
        >
          <span>Análise de Prós e Contras</span>
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="flex flex-col gap-4 pt-3 pb-1 border-t border-gray-800/80 mt-2">
                {/* Pros */}
                <div>
                  <h4 className="text-[10px] font-bold tracking-[0.1em] uppercase text-emerald-400 mb-2">
                    Prós
                  </h4>
                  <ul className="flex flex-col gap-1.5">
                    {app.pros.map((pro, index) => (
                      <li key={index} className="text-[11px] leading-relaxed text-gray-300 flex items-start gap-2">
                        <Check className="text-emerald-400 shrink-0 mt-0.5" size={11} />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contras */}
                {app.contras && app.contras.length > 0 && (
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.1em] uppercase text-rose-400 mb-2">
                      Contras
                    </h4>
                    <ul className="flex flex-col gap-1.5">
                      {app.contras.map((contra, index) => (
                        <li key={index} className="text-[11px] leading-relaxed text-gray-400 flex items-start gap-2">
                          <X className="text-rose-400 shrink-0 mt-0.5" size={11} />
                          <span>{contra}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer / Access Button */}
      <div className="relative z-10 flex flex-col gap-3 mt-auto pt-2">
        <div className="h-px bg-gray-800/80 w-full" />
        
        <a 
          href={app.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-gray-900 hover:bg-gray-850 text-white hover:text-white border border-gray-800 hover:border-gray-700 transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer text-center select-none"
        >
          <span>Visitar Site Oficial</span>
          <ExternalLink size={12} className="text-gray-400" />
        </a>
      </div>
    </motion.div>
  );
}
