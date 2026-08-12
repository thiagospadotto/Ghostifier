import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { ImageWithFallback } from "./components/ImageWithFallback";
import { Quiz } from "./Quiz";
import { AlternativesHub } from "./AlternativesHub";
import svgPaths from "./utils/svgPaths";
import imgHeroSection from "../assets/images/hero-section.png";
import imgCard1 from "../assets/images/card-1.png";
import imgCard2 from "../assets/images/card-2.png";
import imgCard3 from "../assets/images/card-3.png";
import logoDefault from "../assets/logo_default.svg";


const C = {
  base: "#1e1e2e",
  mantle: "#181825",
  surface: "#27293d",
  surface2: "#222235",
  mauve: "#cba6f7",
  blue: "#89b4fa",
  text: "#cdd6f4",
  subtext: "#a6adc8",
  overlay: "#ededed",
  darkPurple: "#401e66",
};


function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


function LogoSvg({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoDefault}
      className={className}
      alt="Ghostifier Logo"
    />
  );
}


function GhostIllustration() {
  return (
    <div className="relative w-[484px] h-[360px] shrink-0">
      <div
        className="absolute rounded-full opacity-20 blur-[75px] w-[386px] h-[386px] bg-[#89b4fa] left-1/2 top-1/2 -translate-x-[40%] -translate-y-[48%]"
      />
          <div className="absolute inset-0">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 484 360">
              <path d={svgPaths.p493c200} fill="#1E1E2E" />
            </svg>
          </div>
          <div className="absolute inset-[4.7%_16.69%_47.91%_47.06%]">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 175.56 170.376">
              <path d={svgPaths.p1b01ad00} fill="url(#gh_grad1)" />
              <defs>
                <linearGradient id="gh_grad1" x1="87.78" x2="87.78" y1="0" y2="170.376" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#9A9A9A" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute inset-[8.82%_4.48%_3.02%_26.03%]">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 336.583 316.952">
              <path d={svgPaths.pb9c1800} fill="url(#gh_grad2)" />
              <defs>
                <linearGradient id="gh_grad2" x1="168.292" x2="168.292" y1="0" y2="316.952" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#9A9A9A" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute inset-[76.39%_69.84%_2.83%_9.83%]">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 98.4764 74.7265">
              <path d={svgPaths.p2f051a00} fill="url(#gh_grad3)" />
              <defs>
                <linearGradient id="gh_grad3" x1="49.24" x2="49.24" y1="0" y2="74.7265" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C4C4C4" />
                  <stop offset="1" stopColor="#9A9A9A" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute inset-[28.86%_19.83%_58.05%_71.86%]">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 40.2716 47.0757">
              <path d={svgPaths.p63d9760} fill="#C4C4C4" />
            </svg>
          </div>
          <div className="absolute inset-[27.26%_18.61%_53.41%_58.69%]">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 109.918 69.5">
              <path d={svgPaths.p31d7f1f0} fill="#C4C4C4" />
            </svg>
          </div>
          <div className="absolute inset-[27.26%_33.85%_53.41%_58.69%]">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 36.1428 69.5">
              <path d={svgPaths.pb5b5b00} fill="#1E1E2E" />
            </svg>
          </div>
          <div className="absolute inset-[24.95%_21.02%_58.05%_71.86%]">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 34.4716 61.122">
              <path d={svgPaths.p4e69680} fill="#1E1E2E" />
            </svg>
          </div>
          <div className="absolute inset-[50.79%_23.96%_39.83%_71.54%]">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 21.7749 33.7263">
              <path d={svgPaths.p3cd3b180} fill="#D7D7D7" />
            </svg>
          </div>
          <div className="absolute inset-[36.38%_0.03%_37.6%_75.42%]">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 118.923 93.55">
              <path d={svgPaths.p352ca100} fill="#1E1E2E" />
            </svg>
          </div>
          <div className="absolute inset-[37.49%_0.86%_38.72%_76.24%]">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 110.914 85.5449">
              <path d={svgPaths.p1a830b00} fill="url(#gh_grad4)" />
              <defs>
                <linearGradient id="gh_grad4" x1="6.2" x2="101.7" y1="13.56" y2="87.56" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#D3D3D3" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute inset-[34.2%_50.34%_55.33%_46.78%]">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 13.93 37.65">
              <path d={svgPaths.p2fa82980} fill="white" />
            </svg>
          </div>
          <div className="absolute inset-[14.29%_50.84%_79.32%_47.06%]">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 10.17 22.97">
              <path d={svgPaths.p34dcf480} fill="#C4C4C4" />
            </svg>
          </div>
          <div className="absolute inset-[64.22%_59.85%_25.76%_37.35%]">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 13.57 36.04">
              <path d={svgPaths.p1caa0a40} fill="#1E1E2E" />
            </svg>
          </div>
          <div className="absolute inset-[52.92%_33.78%_37.06%_65.37%]">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 4.13 36.03">
              <path d={svgPaths.p20135600} fill="#1E1E2E" />
            </svg>
          </div>
          <div className="absolute inset-[52.82%_36.89%_44.35%_58.98%]">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 19.98 10.20">
              <path d={svgPaths.p21d66700} fill="#1E1E2E" />
            </svg>
          </div>
          <div className="absolute inset-[67.91%_12.95%_23.99%_85.56%]">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 7.23 29.1">
              <path d={svgPaths.p10fabc80} fill="#1E1E2E" />
            </svg>
          </div>
          <div className="absolute inset-[74.35%_28.28%_22.83%_70.19%]">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 7.43 10.12">
              <path d={svgPaths.p23c54d00} fill="#1E1E2E" />
            </svg>
          </div>
          <div className="absolute inset-[78.13%_26.09%_16.92%_71.12%]">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 13.54 17.77">
              <path d={svgPaths.p9219770} fill="#1E1E2E" />
            </svg>
          </div>
          <div className="absolute inset-[81.37%_41.64%_15.63%_57.79%]">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 2.76 10.79">
              <path d={svgPaths.pdcb4600} fill="#1E1E2E" />
            </svg>
          </div>
          <div className="absolute inset-[86.41%_63.33%_11.15%_34.43%]">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 10.84 8.78">
              <path d={svgPaths.p27de54f0} fill="#1E1E2E" />
            </svg>
          </div>
          <div className="absolute inset-[79.19%_73.8%_17.46%_24.33%]">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 9.06 12.03">
              <path d={svgPaths.p19600580} fill="#1E1E2E" />
            </svg>
          </div>
          <div className="absolute inset-[90.1%_63.82%_7.84%_34.57%]">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 7.78 7.41">
              <path d={svgPaths.p23003ef0} fill="#1E1E2E" />
            </svg>
          </div>
          <div className="absolute left-[407px] top-[160.86px] w-10 h-10">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 40 40">
              <path d={svgPaths.p1ca3d600} fill="#313244" />
            </svg>
          </div>
          <div className="absolute inset-[4.72%_0.01%_69.35%_81.46%]">
            <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 98.97 93.36">
              <path d={svgPaths.p17191e80} fill="white" fillOpacity="0.15" />
              <path d={svgPaths.p1abda080} fill="white" />
              <path d={svgPaths.pf323300} fill="#EDEDED" />
              <path d={svgPaths.p27c53f00} fill="#1E1E2E" />
            </svg>
          </div>
    </div>
  );
}


function ArrowSvg({ color = C.darkPurple }: { color?: string }) {
  return (
    <svg width="14" height="12" fill="none" viewBox="0 0 13.5 11.5">
      <path
        d={svgPaths.pa7ee2c0}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}


function PrimaryButton({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 px-6 h-12 font-semibold text-sm rounded-lg shadow-[0_4px_15px_rgba(203,166,247,0.15)] bg-[#cba6f7] hover:bg-[#b88ef5] hover:shadow-[0_4px_25px_rgba(203,166,247,0.25)] text-[#401e66] transition-all duration-150 cursor-pointer select-none ${className}`}
    >
      {children}
      <ArrowSvg />
    </motion.button>
  );
}


function GhostButton({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 px-6 h-12 font-semibold text-sm rounded-lg border border-gray-700 hover:border-gray-500 text-gray-200 hover:text-white bg-gray-950/60 hover:bg-gray-800/30 transition-all duration-150 cursor-pointer select-none ${className}`}
    >
      {children}
    </motion.button>
  );
}


function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3 text-xs font-bold tracking-[1.2px] uppercase text-[#89b4fa]">
      <span className="opacity-60">{`</>`}</span>
      <span>{children}</span>
      <span className="opacity-60">{`</>`}</span>
    </div>
  );
}


function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-semibold text-center tracking-tight text-[#ededed] ${className}`}
    >
      {children}
    </h2>
  );
}


function IconBox({
  children,
  color = "mauve",
}: {
  children: React.ReactNode;
  color?: "mauve" | "blue";
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl shrink-0 w-14 h-14 ${
        color === "mauve" ? "bg-[#cba6f7]/10" : "bg-[#89b4fa]/10"
      }`}
    >
      {children}
    </div>
  );
}


const levelColors: Record<string, string> = {
  Iniciante: "text-[#f38ba8] bg-[#f38ba8]/10 border-[#f38ba8]/20",
  Silhueta: "text-[#fab387] bg-[#fab387]/10 border-[#fab387]/20",
  Sombra: "text-[#f9e2af] bg-[#f9e2af]/10 border-[#f9e2af]/20",
  Espectro: "text-[#a6e3a1] bg-[#a6e3a1]/10 border-[#a6e3a1]/20",
  Fantasma: "text-[#cba6f7] bg-[#cba6f7]/10 border-[#cba6f7]/20",
};

function Navbar({
  onQuizOpen,
  view,
  setView,
  ghostLevel,
}: {
  onQuizOpen: () => void;
  view: "home" | "hub";
  setView: (view: "home" | "hub") => void;
  ghostLevel: string | null;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/80 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent backdrop-blur-none border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <button onClick={() => setView("home")} className="cursor-pointer" aria-label="Ir para a página inicial" title="Ir para a página inicial">
          <LogoSvg className="h-8 w-auto" />
        </button>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => setView("home")}
            className={`text-sm font-semibold transition-colors cursor-pointer hover:text-white ${
              view === "home" ? "text-[#cba6f7]" : "text-gray-400"
            }`}
          >
            Início
          </button>
          <button
            onClick={() => setView("hub")}
            className={`text-sm font-semibold transition-colors cursor-pointer hover:text-white ${
              view === "hub" ? "text-[#cba6f7]" : "text-gray-400"
            }`}
          >
            Biblioteca
          </button>

          {ghostLevel ? (
            <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border backdrop-blur-md shadow-lg ${levelColors[ghostLevel] || "text-[#cba6f7] bg-[#cba6f7]/10 border-[#cba6f7]/20"}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              <span>Nível {ghostLevel}</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border border-gray-800 bg-gray-900/40 text-gray-500 backdrop-blur-md select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
              <span>Sem nível fantasma</span>
            </div>
          )}

          <a
            href="https://github.com/thiagospadotto/Ghostifier"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-gray-800/40"
            aria-label="GitHub Repository"
            title="Ver no GitHub"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p1d1f000} fill="currentColor" />
            </svg>
          </a>

          <PrimaryButton className="!py-2.5 !px-6 !text-sm" onClick={onQuizOpen}>
            {ghostLevel ? "Refazer Diagnóstico" : "Começar agora"}
          </PrimaryButton>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          {ghostLevel ? (
            <div className={`flex items-center gap-2 px-2.5 py-1 rounded-full text-[10px] font-bold border ${levelColors[ghostLevel] || "text-[#cba6f7] bg-[#cba6f7]/10 border-[#cba6f7]/20"}`}>
              <span className="w-1 h-1 rounded-full bg-current animate-pulse" />
              <span>{ghostLevel}</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full text-[10px] font-bold border border-gray-850 bg-gray-900/30 text-gray-500 select-none">
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>Sem nível</span>
            </div>
          )}

          <a
            href="https://github.com/thiagospadotto/Ghostifier"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors p-1"
            aria-label="GitHub Repository"
            title="Ver no GitHub"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p1d1f000} fill="currentColor" />
            </svg>
          </a>
          <button
            className="p-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition duration-150"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-gray-950/95 backdrop-blur-md border-b border-gray-800 ${
          open ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-2 px-6 py-4">
          <button
            onClick={() => {
              setView("home");
              setOpen(false);
            }}
            className={`py-3 text-left text-sm border-b font-semibold transition-colors cursor-pointer hover:text-white border-gray-800/60 ${
              view === "home" ? "text-[#cba6f7]" : "text-gray-400"
            }`}
          >
            Início
          </button>
          <button
            onClick={() => {
              setView("hub");
              setOpen(false);
            }}
            className={`py-3 text-left text-sm border-b font-semibold transition-colors cursor-pointer hover:text-white border-gray-800/60 ${
              view === "hub" ? "text-[#cba6f7]" : "text-gray-400"
            }`}
          >
            Biblioteca
          </button>
          <a
            href="https://github.com/thiagospadotto/Ghostifier"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 text-left text-sm border-b font-semibold text-gray-400 hover:text-white border-gray-800/60 flex items-center gap-2"
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p1d1f000} fill="currentColor" />
            </svg>
            <span>GitHub</span>
          </a>
          <div className="pt-2 pb-1 flex flex-col gap-2">
            <PrimaryButton className="w-full justify-center !text-sm" onClick={() => { onQuizOpen(); setOpen(false); }}>
              {ghostLevel ? "Refazer Diagnóstico" : "Começar agora"}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </header>
  );
}


function HeroSection({
  onQuizOpen,
  setView,
}: {
  onQuizOpen: () => void;
  setView: (view: "home" | "hub") => void;
}) {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden bg-gray-950"
    >
      <div className="absolute inset-0 pointer-events-none">
        <ImageWithFallback
          src={imgHeroSection}
          alt=""
          className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-20"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-gray-950/0 via-gray-950/0 to-gray-950 via-60%"
        />
      </div>

      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10 pt-28 pb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ">
            <div className="flex-1 min-w-0 flex flex-col gap-6 lg:gap-8">
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.15] bg-gradient-to-b from-white to-[#cba6f7] bg-clip-text text-transparent pb-4"
              >
                Torne-se invisível. Retome o controle da sua vida digital.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="text-lg leading-relaxed max-w-xl text-gray-300"
              >
                Termos abusivos e rastreamento invisível? Recupere a sua soberania digital com softwares livres e seguros.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                className="flex flex-wrap gap-4"
              >
                <PrimaryButton onClick={onQuizOpen}>Ficar Invisível</PrimaryButton>
                <GhostButton onClick={() => setView("hub")}>Explorar Alternativas Livres</GhostButton>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="shrink-0 hidden lg:block scale-75 xl:scale-90 origin-center"
            >
              <GhostIllustration />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 pt-6 flex flex-wrap gap-x-10 gap-y-2 text-sm border-t border-gray-800"
          >
            {[
              { highlight: "Zero", rest: "coleta de dados" },
              { highlight: "100%", rest: "código aberto" },
              { highlight: "Sem", rest: "criação de conta" },
            ].map(({ highlight, rest }) => (
              <span key={highlight + rest} className="flex items-center gap-1.5">
                <span className="font-bold text-[#cba6f7]">{highlight}</span>
                <span className="text-gray-400">{rest}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


function ProblemSection() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-3xl mx-auto px-6 md:px-10 flex flex-col items-center gap-10 text-center">
        <FadeIn>
          <div
            className="flex items-center justify-center rounded-xl mb-2 w-14 h-14 bg-[#cba6f7]/10"
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
              <path d={svgPaths.p275a1b40} fill="#cba6f7" />
            </svg>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <SectionHeading>
            Fácil de entrar,{" "}
            <span className="text-[#cba6f7]">impossível de sair?</span>
          </SectionHeading>
        </FadeIn>

        <FadeIn delay={0.16} className="flex flex-col gap-6">
          <p className="text-xl leading-relaxed text-gray-300">
            As grandes empresas de tecnologia utilizam{" "}
            <strong className="font-bold text-white">
              "Dark Patterns"
            </strong>
            : armadilhas visuais e processos confusos, que têm como objetivo manter você preso aos serviços delas.
          </p>
          <div className="h-px w-full bg-gray-800" />
          <p className="text-base leading-relaxed text-gray-400">
            Acreditamos que a privacidade não deveria exigir conhecimentos avançados em programação.
            <br />
            Mudar de software deve ser uma escolha sua, não um desafio.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}


function StepsSection({ onQuizOpen }: { onQuizOpen: () => void }) {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col gap-16">
        <FadeIn className="flex flex-col items-center gap-4">
          <SectionLabel>COMO FUNCIONA</SectionLabel>
          <SectionHeading>
            Sua transição em{" "}
            <span className="text-[#cba6f7]">três passos.</span>
          </SectionHeading>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6 auto-rows-fr">
          <FadeIn delay={0.05} className="md:col-span-2 xl:col-span-4">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden h-full min-h-[280px] flex flex-col justify-end p-10 bg-[#cba6f7]/5 border border-[#cba6f7]/20 backdrop-blur-md shadow-md"
            >
              <div className="absolute inset-0 mix-blend-soft-light opacity-15 blur-[4px]">
                <ImageWithFallback src={imgCard1} alt="" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <span
                className="absolute top-6 right-8 text-9xl font-extrabold leading-none select-none pointer-events-none opacity-70 text-[#cba6f7]/25 drop-shadow-[0_0_35px_rgba(203,166,247,0.25)]"
              >
                1
              </span>
              <div className="relative flex flex-col gap-5">
                <IconBox color="blue">
                  <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
                    <path d={svgPaths.p17118380} fill="#89b4fa" />
                  </svg>
                </IconBox>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    O Diagnóstico
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    Responda a um{" "}
                    <strong className="text-gray-300">questionário rápido de 6 perguntas</strong>{" "}
                    e veja onde a sua privacidade está mais vulnerável. Resultados instantâneos, sem criar conta.
                  </p>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.12} className="md:col-span-2 xl:col-span-2">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden h-full min-h-[280px] flex flex-col justify-end p-8 bg-gray-900/60 border border-gray-800/80 backdrop-blur-md shadow-md"
            >
              <div className="absolute inset-0 mix-blend-soft-light opacity-15 blur-[4px]">
                <ImageWithFallback src={imgCard2} alt="" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <span
                className="absolute top-4 right-6 text-9xl font-extrabold leading-none select-none pointer-events-none opacity-70 text-[#89b4fa]/25 drop-shadow-[0_0_35px_rgba(137,180,250,0.25)]"
              >
                2
              </span>
              <div className="relative flex flex-col gap-5">
                <IconBox color="blue">
                  <svg width="28" height="28" fill="none" viewBox="0 0 27.977 27.9754">
                    <path clipRule="evenodd" d={svgPaths.p93ec700} fill="#89b4fa" fillRule="evenodd" />
                  </svg>
                </IconBox>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    A Descoberta
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    Descubra softwares Open Source{" "}
                    <strong className="text-gray-300">seguros e poderosos</strong>{" "}
                    que não rastreiam você.
                  </p>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.2} className="md:col-span-2 xl:col-span-6">
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 sm:p-10 bg-gray-900/60 border border-gray-800/80 backdrop-blur-md shadow-md"
            >
              <div className="absolute inset-0 mix-blend-soft-light opacity-15 blur-[4px]">
                <ImageWithFallback src={imgCard3} alt="" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <span
                className="hidden sm:block text-9xl font-extrabold leading-none select-none shrink-0 opacity-70 text-[#89b4fa]/25 drop-shadow-[0_0_35px_rgba(137,180,250,0.25)]"
              >
                3
              </span>
              <div
                className="hidden sm:block w-px self-stretch bg-gray-800/60"
              />
              <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 flex-1">
                <IconBox color="blue">
                  <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
                    <path d={svgPaths.p1ebdad00} fill="#89b4fa" />
                  </svg>
                </IconBox>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-1.5 text-white">
                    A Migração
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    Nós centralizamos as informações e apontamos exatamente o{" "}
                    <strong className="text-gray-300">caminho para você</strong>.{" "}
                    Sem jargões técnicos, sem contratos de 40 páginas.
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onQuizOpen}
                  className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-xs shadow-[0_4px_15px_rgba(203,166,247,0.15)] bg-[#cba6f7] hover:bg-[#b88ef5] hover:shadow-[0_4px_25px_rgba(203,166,247,0.25)] text-[#401e66] transition-all duration-150 cursor-pointer"
                >
                  Começar agora
                  <svg width="12" height="11" fill="none" viewBox="0 0 14 12">
                    <path d={svgPaths.p20fe6c80} stroke="#401e66" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.55556" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}


const features = [
  {
    title: "Criptografia e Segurança",
    body: (
      <>
        Recomendamos apenas ferramentas que utilizam arquitetura de{" "}
        <strong className="text-gray-200">"Conhecimento Zero"</strong>{" "}
        ou código auditável. Suas chaves, suas regras.
      </>
    ),
    icon: (
      <svg width="20" height="25" fill="none" viewBox="0 0 20 25">
        <path d={svgPaths.p1310f9c0} fill="#CBA6F7" />
      </svg>
    ),
  },
  {
    title: "100% Transparente",
    body: (
      <>
        O Ghostifier{" "}
        <strong className="text-gray-200">não coleta seus dados</strong>, não exige criação de conta
        e não vende anúncios. Nosso código também é aberto.
      </>
    ),
    icon: (
      <svg width="27.5" height="24.75" fill="none" viewBox="0 0 27.5 24.75">
        <path d={svgPaths.p241e3000} fill="#CBA6F7" />
      </svg>
    ),
  },
  {
    title: "Zero Julgamentos",
    body: (
      <>
        Você não precisa morar em uma caverna para ter privacidade. Mostramos alternativas que se encaixam na sua{" "}
        <strong className="text-gray-200">rotina moderna.</strong>
      </>
    ),
    icon: (
      <svg width="27.5" height="25" fill="none" viewBox="0 0 27.5 25">
        <path d={svgPaths.p4d74500} fill="#CBA6F7" />
      </svg>
    ),
  },
];

function FeaturesSection() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col gap-16">
        <FadeIn className="flex flex-col items-center gap-4">
          <SectionLabel>POR QUE USAR O GHOSTIFIER</SectionLabel>
          <SectionHeading>
            Privacidade By Design.{" "}
            <span className="text-[#cba6f7]">Feito para humanos.</span>
          </SectionHeading>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ title, body, icon }, i) => (
            <FadeIn key={title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl p-8 flex flex-col gap-5 h-full bg-gray-900/60 border border-gray-800/80 hover:border-gray-700/80 backdrop-blur-md shadow-lg transition-all"
              >
                <IconBox color="mauve">{icon}</IconBox>
                <h3 className="text-2xl font-semibold pt-2 text-white">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {body}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}


function CtaSection({
  onQuizOpen,
  setView,
}: {
  onQuizOpen: () => void;
  setView: (view: "home" | "hub") => void;
}) {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeIn>
          <div
            className="relative rounded-2xl overflow-hidden p-12 md:p-20 flex flex-col items-center text-center gap-8 border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950/80 shadow-2xl backdrop-blur-md"
          >
            {/* Glow */}
            <div
              className="absolute rounded-full blur-[80px] opacity-[0.06] pointer-events-none w-80 h-80 bg-[#cba6f7] top-[120px] left-1/2 -translate-x-1/2"
            />

            <div className="relative flex flex-col items-center gap-5">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                Inicie seu protocolo de{" "}
                <span className="text-[#cba6f7]">anonimato</span> agora.
              </h2>
              <p className="text-base max-w-lg leading-relaxed text-gray-400">
                Faça o teste agora e dê o primeiro passo rumo à sua independência digital.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <PrimaryButton onClick={onQuizOpen}>Ficar Invisível</PrimaryButton>
                <GhostButton onClick={() => setView("hub")}>Explorar Alternativas Livres</GhostButton>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="py-12 bg-gray-950 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center text-center gap-6">
        {/* Logo centered */}
        <div className="flex items-center justify-center">
          <LogoSvg className="h-8 w-auto" />
        </div>

        {/* Slogans centered */}
        <div className="text-sm leading-relaxed text-gray-400">
          <p>Torne-se Invisível.</p>
          <p>Retome o controle da sua vida digital.</p>
        </div>

        {/* GitHub link centered */}
        <div>
          <a
            href="https://github.com/thiagospadotto/Ghostifier"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-100 opacity-70 inline-block text-white"
            aria-label="GitHub Repository"
            title="Ver projeto no GitHub"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p1d1f000} fill="#ededed" />
            </svg>
          </a>
        </div>

        {/* Copyright centered */}
        <p className="text-[10px] uppercase font-bold tracking-wider text-gray-600 select-none">
          © 2026 GHOSTIFIER
        </p>
      </div>
    </footer>
  );
}


export default function App() {
  const [quizOpen, setQuizOpen] = useState(false);
  const [view, setView] = useState<"home" | "hub">("home");
  const [ghostLevel, setGhostLevel] = useState<string | null>(null);

  useEffect(() => {
    // Carrega nível inicial
    const lvl = localStorage.getItem("ghost_level");
    setGhostLevel(lvl);

    // Ouve o evento de conclusão do quiz
    const handleQuizCompleted = () => {
      setGhostLevel(localStorage.getItem("ghost_level"));
    };

    window.addEventListener("ghost-quiz-completed", handleQuizCompleted);
    return () => {
      window.removeEventListener("ghost-quiz-completed", handleQuizCompleted);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view]);

  return (
    <div className="min-h-screen font-sans antialiased bg-gray-950">
      {quizOpen && (
        <Quiz
          onClose={(goToHub) => {
            setQuizOpen(false);
            if (goToHub) {
              setView("hub");
            }
          }}
        />
      )}
      <Navbar onQuizOpen={() => setQuizOpen(true)} view={view} setView={setView} ghostLevel={ghostLevel} />
      
      {view === "home" ? (
        <>
          <HeroSection onQuizOpen={() => setQuizOpen(true)} setView={setView} />
          <ProblemSection />
          <StepsSection onQuizOpen={() => setQuizOpen(true)} />
          <FeaturesSection />
          <CtaSection onQuizOpen={() => setQuizOpen(true)} setView={setView} />
        </>
      ) : (
        <AlternativesHub onBack={() => setView("home")} ghostLevel={ghostLevel} onQuizOpen={() => setQuizOpen(true)} />
      )}
      
      <Footer />
    </div>
  );
}
