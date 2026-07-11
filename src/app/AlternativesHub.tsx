import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  X,
  RefreshCw, 
  AlertCircle, 
  ArrowLeft, 
  ArrowUp,
  ChevronDown, 
  Sparkles,
  Globe,
  Search as SearchIcon,
  Mail,
  MessageSquare,
  Film,
  Palette,
  ClipboardList,
  HardDrive,
  Shield,
  Zap,
  Puzzle,
  EyeOff,
  Monitor,
  Terminal,
  Grid,
  Layers
} from "lucide-react";
import { AlternativeCard, AlternativeApp } from "./components/AlternativeCard";

const categories = [
  "Todas",
  "Armazenamento",
  "Buscadores",
  "Criatividade",
  "Dev & Ferramentas",
  "E-mail",
  "Extensões",
  "Front-ends alternativos",
  "Infraestrutura",
  "Inteligência Artificial",
  "Mensageria",
  "Mídia",
  "Navegação",
  "Privacidade & Info",
  "Produtividade",
  "Rede & DNS",
  "Segurança",
] as const;

const categoryIcons: Record<string, React.ComponentType<any>> = {
  "Todas": Grid,
  "Navegação": Globe,
  "Buscadores": SearchIcon,
  "Inteligência Artificial": Sparkles,
  "E-mail": Mail,
  "Mensageria": MessageSquare,
  "Mídia": Film,
  "Front-ends alternativos": Layers,
  "Criatividade": Palette,
  "Produtividade": ClipboardList,
  "Armazenamento": HardDrive,
  "Segurança": Shield,
  "Rede & DNS": Zap,
  "Extensões": Puzzle,
  "Privacidade & Info": EyeOff,
  "Infraestrutura": Monitor,
  "Dev & Ferramentas": Terminal,
};

const orderedCategories = [
  "Armazenamento",
  "Buscadores",
  "Criatividade",
  "Dev & Ferramentas",
  "E-mail",
  "Extensões",
  "Front-ends alternativos",
  "Infraestrutura",
  "Inteligência Artificial",
  "Mensageria",
  "Mídia",
  "Navegação",
  "Privacidade & Info",
  "Produtividade",
  "Rede & DNS",
  "Segurança",
] as const;


// ─── Dropdown Options ──────────────────────────────────────────────────────────
const ghostLevelOptions = [
  { value: "Todos", label: "Todos os Níveis", icon: <Sparkles size={12} className="text-[#89b4fa]" /> },
  { value: "Iniciante", label: "1. Iniciante", icon: <span className="text-[10px]">🔴</span> },
  { value: "Silhueta", label: "2. Silhueta", icon: <span className="text-[10px]">🟠</span> },
  { value: "Sombra", label: "3. Sombra", icon: <span className="text-[10px]">💛</span> },
  { value: "Espectro", label: "4. Espectro", icon: <span className="text-[10px]">🟢</span> },
  { value: "Fantasma", label: "5. Fantasma", icon: <span className="text-[10px]">🟣</span> },
];

const sortOptions = [
  { value: "recommended", label: "Padrão", icon: <span className="text-[10px]">⭐</span> },
  { value: "difficulty-asc", label: "Dificuldade: Fácil → Difícil", icon: <span className="text-[10px]">📈</span> },
  { value: "difficulty-desc", label: "Dificuldade: Difícil → Fácil", icon: <span className="text-[10px]">📉</span> },
  { value: "name-asc", label: "Nome: A → Z", icon: <span className="text-[10px]">🔤</span> },
  { value: "name-desc", label: "Nome: Z → A", icon: <span className="text-[10px]">🔤</span> },
];

// ─── Custom Dropdown Component ──────────────────────────────────────────────────
function CustomDropdown({
  value,
  onChange,
  options,
  labelPrefix,
}: {
  value: string;
  onChange: (val: string) => void;
  options: { value: string; label: string; icon?: React.ReactNode }[];
  labelPrefix?: string;
}) {
  const [open, setOpen] = useState(false);
  const selectedOption = options.find((opt) => opt.value === value) || options[0];

  return (
    <div className="relative inline-block text-left w-full sm:w-[195px] z-20">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 text-xs font-bold text-gray-300 bg-gray-900 border border-gray-800 hover:border-gray-700 hover:text-white rounded-xl transition-all cursor-pointer select-none"
      >
        <div className="flex items-center gap-1.5 truncate">
          {selectedOption.icon}
          <span>
            {labelPrefix ? `${labelPrefix}: ` : ""}
            {selectedOption.label}
          </span>
        </div>
        <ChevronDown size={14} className={`text-gray-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Background overlay to click out */}
            <div className="fixed inset-0 z-20" onClick={() => setOpen(false)} />
            
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.12 }}
              className="absolute right-0 mt-2 w-full min-w-[195px] rounded-xl bg-gray-900 border border-gray-800 shadow-2xl z-30 overflow-hidden py-1"
            >
              {options.map((opt) => {
                const active = opt.value === value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      onChange(opt.value);
                      setOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 px-4 py-2 text-left text-xs font-semibold transition-colors hover:bg-gray-850 hover:text-white ${
                      active ? "text-[#cba6f7] bg-[#cba6f7]/5" : "text-gray-400"
                    }`}
                  >
                    {opt.icon}
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function CardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl p-6 flex flex-col gap-4 h-full bg-gray-900/40 border border-gray-800">
      <div className="flex gap-4 items-start">
        <div className="w-14 h-14 rounded-2xl bg-gray-800" />
        <div className="flex-1 flex flex-col gap-2">
          <div className="h-4 bg-gray-850 rounded w-1/3" />
          <div className="h-5 bg-gray-800 rounded w-2/3" />
        </div>
      </div>
      <div className="h-14 bg-gray-800/60 rounded-xl w-full" />
      <div className="h-10 bg-gray-850 rounded w-full" />
    </div>
  );
}

export function AlternativesHub({
  onBack,
  ghostLevel = null,
  onQuizOpen,
}: {
  onBack: () => void;
  ghostLevel?: string | null;
  onQuizOpen?: () => void;
}) {
  const [alternatives, setAlternatives] = useState<AlternativeApp[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>("Todas");
  const [onlyRecommended, setOnlyRecommended] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const [selectedGhostLevelFilter, setSelectedGhostLevelFilter] = useState<string>("Todos");
  const [sortBy, setSortBy] = useState<string>("recommended");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (ghostLevel) {
      setSelectedGhostLevelFilter(ghostLevel);
    } else {
      setSelectedGhostLevelFilter("Todos");
    }
  }, [ghostLevel]);

  useEffect(() => {
    let active = true;

    async function fetchAlternatives() {
      setLoading(true);
      setError(null);
      try {
        const queryParams = new URLSearchParams();
        if (selectedCategory !== "Todas") {
          queryParams.append("category", selectedCategory);
        }
        if (onlyRecommended) {
          queryParams.append("recommended", "true");
        }
        if (searchTerm.trim() !== "") {
          queryParams.append("search", searchTerm.trim());
        }

        const res = await fetch(`http://localhost:3001/api/alternatives?${queryParams.toString()}`);
        if (!res.ok) {
          throw new Error("Erro ao carregar dados do servidor.");
        }
        const data = await res.json();
        if (active) {
          setAlternatives(data);
        }
      } catch (err) {
        if (active) {
          setError("Não foi possível conectar ao servidor. Certifique-se de que o backend está rodando na porta 3001.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    const timer = setTimeout(() => {
      fetchAlternatives();
    }, 250);

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [selectedCategory, onlyRecommended, searchTerm, retryCount]);

  // Reset scroll to the top of the page when the user changes the category
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [selectedCategory]);

  // ─── Score Invisível de Privacidade e Soberania Digital ───────────────────
  // Método criado por Especialista Sênior em Cibersegurança para classificar
  // a maturidade real de privacidade de um aplicativo.
  // Avalia: Índice de Transparência (40%), Licença Open Source (20%),
  // Cadastro/Acesso (15%), Simplicidade de Migração (15%) e Modelo de Negócios (10%).
  const calcularScoreInvisivel = (app: AlternativeApp): number => {
    let score = 0;

    // 1. Índice de Transparência (max 40 pts)
    const transparency = app.privacyScore || 5;
    score += transparency * 4;

    // 2. Licença / Código Aberto (max 20 pts)
    if (app.isOpenSource) {
      score += 20;
    }

    // 3. Acesso / Cadastro (max 15 pts)
    if (!app.requerConta) {
      score += 15;
    }

    // 4. Dificuldade de Migração / Acessibilidade (max 15 pts)
    if (app.dificuldade === 1) score += 15;
    else if (app.dificuldade === 2) score += 12;
    else if (app.dificuldade === 3) score += 9;
    else if (app.dificuldade === 4) score += 5;
    else if (app.dificuldade === 5) score += 0;

    // 5. Modelo de Negócios (max 10 pts)
    const model = (app.modeloNegocio || "").toLowerCase();
    if (model.includes("doaç") || model.includes("sem fins lucrativos") || (model.includes("gratuito") && !model.includes("anúncio") && !model.includes("publicidade"))) {
      score += 10;
    } else if (model.includes("freemium") || model.includes("premium") || model.includes("assinatura") || model.includes("pago") || model.includes("comercial") || model.includes("open-core")) {
      score += 5;
    }

    return score;
  };

  // 1. Filtrar por Nível Ghost baseado no Score Invisível e Dificuldade
  let processedApps = [...alternatives];
  if (selectedGhostLevelFilter !== "Todos") {
    processedApps = processedApps.filter((app) => {
      const scoreInvisivel = calcularScoreInvisivel(app);
      if (selectedGhostLevelFilter === "Iniciante") {
        return scoreInvisivel >= 30 && app.dificuldade <= 2;
      }
      if (selectedGhostLevelFilter === "Silhueta") {
        return scoreInvisivel >= 45 && app.dificuldade <= 3;
      }
      if (selectedGhostLevelFilter === "Sombra") {
        return scoreInvisivel >= 60 && app.dificuldade <= 4;
      }
      if (selectedGhostLevelFilter === "Espectro") {
        return scoreInvisivel >= 75;
      }
      if (selectedGhostLevelFilter === "Fantasma") {
        return scoreInvisivel >= 90;
      }
      return true;
    });
  }

  // 2. Ordenar de acordo com sortBy
  const sortedApps = [...processedApps].sort((a, b) => {
    if (sortBy === "recommended") {
      const aRec = a.isRecomendado ? 1 : 0;
      const bRec = b.isRecomendado ? 1 : 0;
      if (bRec !== aRec) return bRec - aRec;
      return a.nomeAlternativa.localeCompare(b.nomeAlternativa);
    }
    if (sortBy === "difficulty-asc") {
      if (a.dificuldade !== b.dificuldade) return a.dificuldade - b.dificuldade;
      return a.nomeAlternativa.localeCompare(b.nomeAlternativa);
    }
    if (sortBy === "difficulty-desc") {
      if (a.dificuldade !== b.dificuldade) return b.dificuldade - a.dificuldade;
      return a.nomeAlternativa.localeCompare(b.nomeAlternativa);
    }
    if (sortBy === "name-asc") {
      return a.nomeAlternativa.localeCompare(b.nomeAlternativa);
    }
    if (sortBy === "name-desc") {
      return b.nomeAlternativa.localeCompare(a.nomeAlternativa);
    }
    return 0;
  });

  return (
    <div className="min-h-screen pt-28 pb-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col gap-10">
        
        {/* Navigation & Header */}
        <div className="flex flex-col gap-4">
          <motion.button
            onClick={onBack}
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.97 }}
            className="self-start inline-flex items-center gap-2 text-sm font-semibold cursor-pointer text-gray-400 hover:text-white transition-colors duration-150"
          >
            <ArrowLeft size={16} />
            Voltar ao início
          </motion.button>
          
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white to-[#cba6f7] bg-clip-text text-transparent pb-1">
              Biblioteca de Alternativas Livres
            </h1>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column: Sticky Sidebar Panel */}

          <aside className="w-full lg:w-72 shrink-0 lg:sticky lg:top-28 bg-gray-900 border border-gray-800 p-4 md:p-5 rounded-2xl flex flex-col gap-4">
            <div className="hidden lg:block pb-2 border-b border-gray-850">
              <h3 className="text-xs font-bold tracking-[1.5px] uppercase text-[#89b4fa]">
                Categorias
              </h3>
            </div>
            <div className="flex flex-row lg:flex-col gap-2 lg:gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-thin">
              {categories.map((cat) => {
                const active = selectedCategory === cat;
                const IconComponent = categoryIcons[cat] || Terminal;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`shrink-0 lg:shrink-1 lg:w-full flex items-center gap-3 px-3.5 py-2 text-xs font-bold rounded-lg text-left transition-all cursor-pointer border focus-visible:ring-2 focus-visible:ring-[#cba6f7] focus-visible:outline-none ${
                      active
                        ? "bg-[#cba6f7] text-[#401e66] border-[#cba6f7] shadow-[0_4px_15px_rgba(203,166,247,0.25)]"
                        : "bg-transparent text-gray-400 border-transparent hover:bg-gray-950/60 hover:text-white"
                    }`}
                  >
                    <IconComponent size={14} className="shrink-0" />
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-850 my-1 hidden lg:block" />

            {/* Recommended Switch Toggle */}
            <div className="flex items-center justify-between px-2 py-1 select-none border-t border-gray-850 lg:border-t-0 pt-3 lg:pt-0">
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-bold text-gray-200 flex items-center gap-1">⭐ Recomendados apenas</span>
              </div>
              <button
                onClick={() => setOnlyRecommended(!onlyRecommended)}
                aria-label="Filtrar recomendados"
                title="Filtrar recomendados"
                className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  onlyRecommended ? "bg-[#cba6f7]" : "bg-gray-800"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    onlyRecommended ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </aside>


          {/* Right Column: Search bar and Results grid */}
          <div className="flex-1 min-w-0 flex flex-col gap-6 w-full">
            {/* Search bar and Filters Row */}
            <div className="sticky top-20 z-10 -mx-1 px-1 py-3 bg-gray-950/80 backdrop-blur-md flex flex-col sm:flex-row gap-4 items-center justify-between border-b border-gray-900">
              {/* Search input */}
              <div className="relative w-full sm:flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Buscar alternativa (ex: Drive)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-10 py-2.5 text-xs text-gray-300 bg-gray-900 border border-gray-800 rounded-xl focus:border-[#cba6f7] focus:ring-1 focus:ring-[#cba6f7] outline-none transition-all duration-150"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-800 transition-colors cursor-pointer"
                    aria-label="Limpar busca"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Dropdowns */}
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-end">
                <CustomDropdown
                  value={selectedGhostLevelFilter}
                  onChange={setSelectedGhostLevelFilter}
                  options={ghostLevelOptions}
                  labelPrefix="Nível"
                />
                <CustomDropdown
                  value={sortBy}
                  onChange={setSortBy}
                  options={sortOptions}
                  labelPrefix="Ordenar"
                />
              </div>
            </div>

            {/* Quiz warning / Incentive Banner */}
            {!ghostLevel && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative overflow-hidden rounded-2xl p-5 border border-[#cba6f7]/20 bg-gradient-to-br from-[#cba6f7]/5 to-gray-950/90 shadow-2xl backdrop-blur-md flex flex-col sm:flex-row items-center gap-5"
              >
                <div className="absolute rounded-full blur-[60px] opacity-[0.06] w-48 h-48 bg-[#cba6f7] -top-12 -right-12 pointer-events-none" />
                <span className="text-3xl shrink-0">🕵️‍♂️</span>
                <div className="flex-1 flex flex-col gap-1 text-center sm:text-left">
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    Descubra seu nível de privacidade recomendado
                  </h4>
                  <p className="text-xs leading-relaxed text-gray-400 max-w-xl">
                    Faça o nosso diagnóstico rápido e totalmente anônimo para encontrar o seu Nível Ghost e receber recomendações sob medida para você.
                  </p>
                </div>
                <button
                  onClick={onQuizOpen}
                  className="shrink-0 px-4 py-2.5 rounded-lg text-xs font-bold bg-[#cba6f7] hover:bg-[#b88ef5] text-[#401e66] transition duration-150 cursor-pointer shadow-md select-none"
                >
                  Fazer Diagnóstico Privado
                </button>
              </motion.div>
            )}

            {/* Default Filter Active Banner */}
            {ghostLevel && selectedGhostLevelFilter === ghostLevel && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative overflow-hidden rounded-xl px-5 py-3 border border-[#89b4fa]/20 bg-[#89b4fa]/5 shadow-md flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
              >
                <div className="flex items-center gap-2.5 text-center sm:text-left">
                  <span className="text-base">🎯</span>
                  <p className="text-gray-300">
                    Filtro automático ativado para o perfil <strong className="text-[#89b4fa]">Nível {ghostLevel}</strong>. Mostrando alternativas mais adequadas para você.
                  </p>
                </div>
                <button
                  onClick={() => setSelectedGhostLevelFilter("Todos")}
                  className="text-xs font-bold text-[#89b4fa] hover:text-[#b88ef5] hover:underline transition cursor-pointer select-none"
                >
                  Ver todas as alternativas
                </button>
              </motion.div>
            )}

            {/* Results grid */}
            <div className="relative min-h-[300px]">
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <CardSkeleton key={i} />
                  ))}
                </div>
              ) : error ? (
                <div className="rounded-2xl p-8 border border-rose-500/20 bg-rose-500/[0.03] flex flex-col items-center justify-center text-center gap-4 max-w-xl mx-auto my-10">
                  <AlertCircle className="text-rose-400" size={42} />
                  <div>
                    <h3 className="text-lg font-bold text-white">Falha na conexão</h3>
                    <p className="text-sm text-gray-400 mt-1">{error}</p>
                  </div>
                  <button
                    onClick={() => setRetryCount((prev) => prev + 1)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs bg-[#cba6f7] text-[#401e66] hover:bg-[#b88ef5] hover:shadow-[0_4px_15px_rgba(203,166,247,0.25)] transition duration-150 cursor-pointer"
                  >
                    <RefreshCw size={14} /> Tentar Novamente
                  </button>
                </div>
              ) : (
                <AnimatePresence mode="popLayout">
                  {sortedApps.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-16 flex flex-col items-center justify-center gap-3"
                    >
                      <span className="text-4xl">🔍</span>
                      <h3 className="text-lg font-bold text-white mt-2">Nenhuma alternativa encontrada</h3>
                      <p className="text-sm text-gray-400 max-w-md">
                        Não encontramos aplicativos com os filtros aplicados. Tente mudar o termo da busca ou categoria.
                      </p>
                      {(searchTerm || selectedCategory !== "Todas" || selectedGhostLevelFilter !== "Todos" || onlyRecommended) && (
                        <button
                          onClick={() => {
                            setSearchTerm("");
                            setSelectedCategory("Todas");
                            setSelectedGhostLevelFilter("Todos");
                            setOnlyRecommended(false);
                          }}
                          className="mt-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#cba6f7] hover:bg-[#b88ef5] text-[#401e66] transition duration-150 cursor-pointer shadow-md select-none"
                        >
                          Limpar todos os filtros
                        </button>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div layout className="flex flex-col gap-10">
                      {selectedCategory !== "Todas" || sortBy === "recommended" ? (
                        (selectedCategory === "Todas"
                          ? orderedCategories
                          : [selectedCategory] as const
                        ).map((cat) => {
                          const appsInCat = sortedApps.filter(app => app.categoria === cat);
                          if (appsInCat.length === 0) return null;

                          const IconComponent = categoryIcons[cat] || Terminal;
                          return (
                            <div key={cat} className="flex flex-col gap-6">
                              <div className="flex items-center gap-3 border-b border-gray-800 pb-3">
                                <IconComponent size={18} className="text-[#89b4fa]" />
                                <h2 className="text-xl font-bold text-white tracking-tight">
                                  {cat}
                                </h2>
                                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-gray-900 border border-gray-800 text-gray-400 leading-none">
                                  {appsInCat.length} {appsInCat.length === 1 ? "alternativa" : "alternativas"}
                                </span>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {appsInCat.map((app) => (
                                  <motion.div
                                    key={app.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <AlternativeCard app={app} />
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <div className="flex flex-col gap-6">
                          <div className="flex items-center gap-3 border-b border-gray-800 pb-3">
                            <span className="text-xl">✨</span>
                            <h2 className="text-xl font-bold text-white tracking-tight">
                              Todas as Alternativas
                            </h2>
                            <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-gray-900 border border-gray-800 text-gray-400 leading-none">
                              {sortedApps.length} {sortedApps.length === 1 ? "alternativa" : "alternativas"}
                            </span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {sortedApps.map((app) => (
                              <motion.div
                                key={app.id}
                                layout
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                              >
                                <AlternativeCard app={app} />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          </div>
        </div>

      </div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 p-3.5 rounded-full bg-[#cba6f7] hover:bg-[#b88ef5] text-[#401e66] hover:text-[#401e66] shadow-[0_8px_30px_rgba(203,166,247,0.4)] transition-colors duration-150 cursor-pointer border border-[#cba6f7]/20 flex items-center justify-center focus:outline-none"
            aria-label="Voltar ao topo"
            title="Voltar ao topo"
          >
            <ArrowUp size={20} strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
