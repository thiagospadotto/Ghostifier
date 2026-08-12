import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowLeft, RotateCcw, ShieldCheck, ShieldAlert, ShieldX, Shield, Ghost, Lightbulb } from "lucide-react";
import logoDefault from "../assets/logo_default.svg";
import logoIcon from "../assets/logo_icon.svg";


const C = {
  base: "#1e1e2e",
  surface: "#27293d",
  surface2: "#222235",
  mauve: "#cba6f7",
  blue: "#89b4fa",
  text: "#cdd6f4",
  subtext: "#a6adc8",
  overlay: "#ededed",
  darkPurple: "#401e66",
  green: "#a6e3a1",
  yellow: "#f9e2af",
  red: "#f38ba8",
  peach: "#fab387",
};


export interface Option {
  points: 0 | 5 | 10;
  label: string;
  detail: string;
}

export interface Question {
  id: number;
  text: string;
  whyItMatters: string;
  options: [Option, Option, Option];
}

export interface Category {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  questions: Question[];
}

export const categories: Category[] = [
  {
    id: "navegacao",
    icon: "🌐",
    title: "Navegação, Buscas e Consumo",
    subtitle: "Mede o nível de rastreamento da sua atividade web diária",
    questions: [
      {
        id: 1,
        text: "Qual navegador (browser) você mais usa no celular e no computador?",
        whyItMatters: "Navegadores proprietários (como Chrome e Edge) coletam telemetria profunda, histórico de acessos e dados do sistema (fingerprinting) para traçar seu perfil de publicidade. Navegadores privados bloqueiam esses rastreadores e impedem que empresas criem uma assinatura única do seu dispositivo.",
        options: [
          { points: 0, label: "Google Chrome, Microsoft Edge ou Safari", detail: "O Chrome é o mais usado no Brasil, mas coleta todo o seu histórico de navegação e dados para anúncios personalizados do Google." },
          { points: 5, label: "Brave ou Firefox configurado", detail: "Firefox com proteção estrita ou Brave bloqueiam anúncios, cookies invasivos e rastreadores por padrão." },
          { points: 10, label: "LibreWolf ou Mullvad Browser", detail: "Focados em privacidade avançada, removem toda telemetria corporativa e evitam o rastreamento por impressão digital (fingerprinting)." },
        ],
      },
      {
        id: 2,
        text: "Onde você faz suas pesquisas e buscas na internet no dia a dia?",
        whyItMatters: "Buscadores tradicionais registram cada pesquisa associando-a ao seu IP e conta pessoal. Suas buscas revelam suas preferências políticas, problemas de saúde e intenções financeiras. Usar buscadores focados em privacidade garante resultados neutros e sem rastreamento de dados.",
        options: [
          { points: 0, label: "Google Search ou Bing", detail: "Registram todas as suas buscas, termos pesquisados, localização e associam tudo ao seu perfil e conta." },
          { points: 5, label: "DuckDuckGo ou Startpage", detail: "Não rastreiam seu histórico de buscas nem salvam o endereço IP do usuário. Resultados neutros." },
          { points: 10, label: "SearXNG", detail: "Um metabuscador descentralizado e de código aberto que busca em várias fontes de forma anônima e sem logs." },
        ],
      },
      {
        id: 3,
        text: "Como você costuma consumir redes sociais e vídeos (como Instagram, TikTok, YouTube)?",
        whyItMatters: "Os apps oficiais de redes sociais e de vídeo rastreiam cada segundo da sua atenção para moldar algoritmos de engajamento viciantes. O uso de front-ends alternativos de código aberto permite consumir o conteúdo dessas plataformas sem anúncios e sem entregar seus metadados às Big Techs.",
        options: [
          { points: 0, label: "Apps oficiais logado na minha conta principal", detail: "Os algoritmos rastreiam cada segundo do seu tempo de tela, curtidas e toques para prever seus comportamentos." },
          { points: 5, label: "Acesso via navegador deslogado ou em aba anônima", detail: "Reduz a conexão direta com seu perfil, mas cookies persistentes e telemetria do navegador ainda o identificam." },
          { points: 10, label: "Front-ends alternativos (Invidious, NewPipe ou Libreddit)", detail: "Acessam as APIs oficiais sem propagandas, sem rastreadores ocultos e sem entregar seus dados de navegação." },
        ],
      },
    ],
  },
  {
    id: "comunicacao",
    icon: "💬",
    title: "Comunicação e Identidade",
    subtitle: "Mede a proteção de metadados e o sigilo de suas conversas",
    questions: [
      {
        id: 4,
        text: "Qual aplicativo você usa para conversar com amigos, família ou no trabalho?",
        whyItMatters: "O SMS e ligações tradicionais trafegam sem criptografia pelas operadoras de telefonia. O WhatsApp protege o conteúdo da mensagem, mas coleta metadados (com quem você fala, quando e onde). Aplicativos como o Signal e SimpleX protegem suas mensagens e eliminam ou ocultam seus metadados.",
        options: [
          { points: 0, label: "WhatsApp ou Instagram Direct", detail: "O WhatsApp é dono dos seus metadados: com quem você fala, quando e onde. Praticamente universal no Brasil, mas zero privacidade de metadados." },
          { points: 5, label: "Signal ou Telegram", detail: "Signal oferece criptografia de ponta a ponta robusta em tudo. Telegram tem ótimos recursos, mas chats comuns não são criptografados no servidor." },
          { points: 10, label: "SimpleX Chat ou Session", detail: "Mensageiros descentralizados que não exigem número de telefone, e-mail ou qualquer identificador pessoal para funcionar." },
        ],
      },
      {
        id: 5,
        text: "Onde está hospedada a sua conta de e-mail principal?",
        whyItMatters: "Provedores gratuitos tradicionais (Gmail, Outlook) escaneiam de forma automatizada o conteúdo de seus e-mails e recibos para fins de direcionamento publicitário. Provedores com criptografia de ponta a ponta garantem privacidade absoluta, pois apenas você possui a chave para ler as mensagens.",
        options: [
          { points: 0, label: "Gmail, Outlook ou Yahoo Mail", detail: "Provedores que escaneiam o conteúdo de suas mensagens e recibos de forma automatizada para fins de anúncios e perfilamento." },
          { points: 5, label: "Provedor corporativo próprio ou de internet local", detail: "Dificulta o monopólio das big techs, mas suas mensagens ainda circulam sem criptografia real nos servidores." },
          { points: 10, label: "Proton Mail ou Tuta Mail", detail: "E-mails suíços/alemães com criptografia de ponta a ponta nativa e política estrita de Conhecimento Zero." },
        ],
      },
      {
        id: 6,
        text: "Como você age quando lojas, farmácias ou sites pedem seu CPF e e-mail para cadastros?",
        whyItMatters: "O fornecimento constante de CPF e e-mail real permite que Data Brokers (agentes de dados) cruzem suas compras físicas com seu perfil digital, vendendo essas informações para empresas de crédito e marketing. Usar pseudônimos e ocultar o CPF quebra esse vínculo.",
        options: [
          { points: 0, label: "Forneço meu CPF, e-mail real e telefone principal", detail: "Facilita o cruzamento de suas compras físicas com seu perfil online, alimentando bancos de dados de score de crédito e marketing." },
          { points: 5, label: "Uso um e-mail secundário genérico ou temporário", detail: "Protege sua caixa de e-mail principal contra spam, mas não impede o rastreamento centralizado feito pelo CPF." },
          { points: 10, label: "Uso redirecionadores de e-mail (SimpleLogin/Addy.io) e evito dar CPF", detail: "Gera e-mails únicos para cada cadastro, ocultando seu endereço e cortando a conexão unificada pelo CPF." },
        ],
      },
    ],
  },
  {
    id: "seguranca",
    icon: "🔐",
    title: "Segurança de Contas e Autenticação",
    subtitle: "Mede sua resistência a vazamentos de senhas e acessos não autorizados",
    questions: [
      {
        id: 7,
        text: "Como você cria e gerencia as senhas de suas contas online?",
        whyItMatters: "Reutilizar a mesma senha em vários serviços é um grande risco de segurança: se um site sofrer um vazamento de dados, invasores poderão acessar suas outras contas usando técnicas de credential stuffing. Gerenciadores dedicados e seguros garantem senhas fortes e únicas para cada site.",
        options: [
          { points: 0, label: "Reutilizo a mesma senha ou variações simples (ex: nome + ano)", detail: "Se um único site sofrer um vazamento de dados, invasores poderão acessar todas as suas outras contas." },
          { points: 5, label: "Guardo de cabeça ou salvo no gerenciador padrão do navegador", detail: "Evita reutilização, mas os gerenciadores integrados do navegador são alvos fáceis de malwares roubadores de credenciais." },
          { points: 10, label: "Uso um gerenciador dedicado (Bitwarden ou KeePassXC)", detail: "Gera e armazena senhas extremamente fortes e criptografadas para cada serviço, acessíveis por uma única senha mestre." },
        ],
      },
      {
        id: 8,
        text: "Você usa Autenticação de Dois Fatores (2FA) para proteger contas importantes (Gov.br, e-mails)?",
        whyItMatters: "A autenticação de dois fatores adiciona uma barreira indispensável de segurança. Códigos recebidos por SMS são facilmente interceptados por golpes de clonagem de chip (SIM Swapping). Aplicativos locais (TOTP) ou chaves físicas de hardware oferecem proteção robusta contra acessos remotos indesejados.",
        options: [
          { points: 0, label: "Não utilizo ou recebo o código apenas por SMS/WhatsApp", detail: "O SMS é altamente vulnerável a ataques de clonagem de chip (SIM Swapping), uma fraude extremamente comum no Brasil." },
          { points: 5, label: "Uso aplicativos geradores de código TOTP (como Aegis ou Ente Auth)", detail: "Excelente segurança. Os códigos mudam a cada 30 segundos e são gerados localmente no seu aparelho, sem depender da operadora." },
          { points: 10, label: "Utilizo uma chave de segurança física via hardware (YubiKey)", detail: "A proteção máxima do mercado. Impede acessos indesejados mesmo se o invasor tiver sua senha e tentar um ataque de phishing." },
        ],
      },
      {
        id: 9,
        text: "Quando precisa transferir fotos ou arquivos grandes para outra pessoa, o que você usa?",
        whyItMatters: "Nuvens convencionais registram o IP de download e escaneiam seus arquivos em busca de violações de termos. Transferências diretas ponta a ponta (P2P ou Onion) evitam servidores intermediários bisbilhotando seus dados, e criptografar arquivos antes de enviá-los protege seu conteúdo.",
        options: [
          { points: 0, label: "Google Drive, Microsoft OneDrive ou WeTransfer", detail: "Eles armazenam, registram seu IP de upload e escaneiam seus arquivos para cumprir políticas corporativas." },
          { points: 5, label: "Compacto e protejo com senha forte (como 7-Zip ou Cryptomator)", detail: "Boa prática. O conteúdo fica protegido contra o provedor da nuvem, embora os metadados de envio persistam." },
          { points: 10, label: "OnionShare, Wormhole criptografado ou LocalSend na rede local", detail: "Transferências diretas ponta a ponta sem servidores intermediários vigiando ou salvando seus dados pessoais." },
        ],
      },
    ],
  },
  {
    id: "infraestrutura",
    icon: "🖥️",
    title: "Armazenamento, Hardware e Redes",
    subtitle: "Mede a segurança do seu sistema local, backups e conexão",
    questions: [
      {
        id: 10,
        text: "Qual sistema operacional roda no seu computador pessoal?",
        whyItMatters: "Windows e macOS são sistemas proprietários com telemetria agressiva e código fechado, impossibilitando auditorias de segurança independentes. Migrar para distribuições Linux de código aberto devolve a soberania digital sobre seu próprio hardware, sem espionagem oculta.",
        options: [
          { points: 0, label: "Windows padrão (muitas vezes ativado com ativadores piratas) ou macOS", detail: "Sistemas proprietários rastreiam telemetria por padrão. Ativadores piratas frequentemente instalam spywares ocultos." },
          { points: 5, label: "Windows ou macOS com telemetria desativada manualmente", detail: "Reduz consideravelmente a exposição de dados para a Microsoft/Apple, mas o código fechado não é auditável." },
          { points: 10, label: "Distribuições Linux seguras (Linux Mint, Pop!_OS ou Fedora)", detail: "Sistemas operacionais de código aberto, totalmente auditáveis, livres de telemetria indesejada e sem necessidade de ativadores." },
        ],
      },
      {
        id: 11,
        text: "Como você protege seus dados, contatos e fotos contra perda ou roubo de aparelhos?",
        whyItMatters: "Falhas de hardware, roubos ou bloqueios acidentais de contas em nuvem podem fazer você perder suas fotos e contatos para sempre. A regra de backup 3-2-1 com criptografia local garante a resiliência física e digital dos seus dados sem que provedores de nuvem acessem seus arquivos.",
        options: [
          { points: 0, label: "Não faço backups ou confio cegamente na sincronização automática da nuvem padrão", detail: "Se sua conta for bloqueada por engano ou invadida, você perde todo o acesso às suas fotos e contatos instantaneamente." },
          { points: 5, label: "Faço backups periódicos em HD externo ou pendrive", detail: "Uma ótima segurança local contra invasões online, mas vulnerável a incidentes físicos como quebras, perdas ou furtos domésticos." },
          { points: 10, label: "Sigo a regra 3-2-1 usando criptografia local (Cryptomator ou VeraCrypt)", detail: "3 cópias dos dados, em 2 mídias diferentes, sendo 1 em local físico isolado ou nuvem com criptografia que só você possui a chave." },
        ],
      },
      {
        id: 12,
        text: "Como você protege sua navegação ao usar redes Wi-Fi públicas (metrô, shoppings, lanchonetes)?",
        whyItMatters: "Em redes Wi-Fi públicas, seus dados de navegação e consultas de DNS podem ser interceptados por terceiros ou pelo provedor da rede. O uso combinado de uma VPN confiável (com Kill Switch) e DNS criptografado protege todo o tráfego que sai do seu dispositivo com segurança.",
        options: [
          { points: 0, label: "Conecto diretamente sem nenhuma proteção adicional", detail: "Tudo o que você acessa pode ser interceptado por criminosos na mesma rede ou registrado pelo provedor do Wi-Fi público." },
          { points: 5, label: "Utilizo uma VPN confiável (como Mullvad VPN ou Proton VPN)", detail: "Cria um túnel criptografado seguro para seus dados, impedindo que interceptem ou vejam quais sites você visita." },
          { points: 10, label: "Uso VPN activa juntamente com DNS criptografado e bloqueador de anúncios", detail: "Combinação ideal: tráfego 100% criptografado e filtros de DNS bloqueando anúncios e domínios maliciosos na raiz." },
        ],
      },
    ],
  },
];


export interface Answers {
  [questionId: number]: 0 | 5 | 10;
}

function totalScore(answers: Answers): number {
  return Object.values(answers).reduce((a, b) => a + b, 0);
}

function categoryScore(answers: Answers, cat: Category): number {
  return cat.questions.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0);
}

interface Level {
  label: string;
  sublabel: string;
  color: string;
  icon: React.ReactNode;
  description: string;
}

function getLevel(score: number): Level {
  if (score <= 24) return {
    label: "Iniciante",
    sublabel: "Nível 1 - Iniciante",
    color: C.red,
    icon: <ShieldX size={28} />,
    description: "Você está no início da sua jornada de privacidade digital. O foco agora deve ser migrar ferramentas básicas e muito fáceis para reduzir o rastreamento em massa no seu dia a dia.",
  };
  if (score <= 48) return {
    label: "Silhueta",
    sublabel: "Nível 2 - Silhueta",
    color: C.peach,
    icon: <ShieldAlert size={28} />,
    description: "Você já deu os primeiros passos e não está mais totalmente exposto, mas ainda deixa contornos visíveis na rede. A migração de ferramentas fáceis ajudará você a sumir aos poucos.",
  };
  if (score <= 72) return {
    label: "Sombra",
    sublabel: "Nível 3 - Sombra",
    color: C.yellow,
    icon: <Shield size={28} />,
    description: "Você se move com cuidado e se tornou difícil de rastrear na maior parte do tempo. Ajustando ferramentas médias de comunicação e segurança, você se tornará quase invisível.",
  };
  if (score <= 96) return {
    label: "Espectro",
    sublabel: "Nível 4 - Espectro",
    color: C.green,
    icon: <ShieldCheck size={28} />,
    description: "Excelente nível de privacidade. Você domina as boas práticas de segurança e deixa pouquíssimos rastros digitais. Quase imperceptível na rede.",
  };
  return {
    label: "Fantasma",
    sublabel: "Nível 5 - Fantasma",
    color: C.mauve,
    icon: <Ghost size={28} />,
    description: "Impressionante. Sua pegada de dados é nula e você retomou o controle total de sua vida digital. Um fantasma completo na rede. Protocolo de anonimato absoluto.",
  };
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


function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3 text-xs font-bold tracking-[1.2px] uppercase text-[#89b4fa]">
      <span className="opacity-60">{`</>`}</span>
      <span>{children}</span>
      <span className="opacity-60">{`</>`}</span>
    </div>
  );
}


function PrimaryBtn({ children, onClick, className = "" }: { children: React.ReactNode; onClick?: () => void; className?: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2.5 px-6 h-12 font-semibold text-sm rounded-lg shadow-[0_4px_15px_rgba(203,166,247,0.15)] bg-[#cba6f7] hover:bg-[#b88ef5] hover:shadow-[0_4px_25px_rgba(203,166,247,0.25)] text-[#401e66] cursor-pointer transition-all duration-150 select-none ${className}`}
    >
      {children}
    </motion.button>
  );
}


function GhostBtn({ children, onClick, className = "" }: { children: React.ReactNode; onClick?: () => void; className?: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2.5 px-6 h-12 font-semibold text-sm rounded-lg border border-gray-700 hover:border-gray-500 text-gray-200 hover:text-white bg-gray-950/60 hover:bg-gray-800/30 cursor-pointer transition-all duration-150 select-none ${className}`}
    >
      {children}
    </motion.button>
  );
}


function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex items-center justify-center rounded-xl shrink-0 w-14 h-14 bg-[#89b4fa]/10"
    >
      {children}
    </div>
  );
}


function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="h-2 rounded-full overflow-hidden w-full bg-gray-950 border border-gray-800/80">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-[#89b4fa] to-[#cba6f7]"
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}


function OptionCard({ option, selected, index, onSelect }: {
  option: Option; selected: boolean; index: number; onSelect: () => void;
}) {
  const labels = ["A", "B", "C"];

  return (
    <motion.button
      onClick={onSelect}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2 }}
      className={`w-full text-left rounded-xl p-5 relative overflow-hidden cursor-pointer border transition-all duration-300 backdrop-blur-md shadow-xl focus-visible:ring-2 focus-visible:ring-[#cba6f7] focus-visible:outline-none ${
        selected
          ? "bg-gradient-to-br from-[#cba6f7]/5 to-gray-950/90 border-[#cba6f7] shadow-[0_4px_20px_rgba(203,166,247,0.12)]"
          : "bg-gradient-to-br from-gray-900 to-gray-950/80 border-gray-800 hover:border-gray-700"
      }`}
    >
      {/* Glow / Gradient Blur */}
      <div className={`absolute rounded-full blur-[40px] pointer-events-none w-32 h-32 transition-all duration-300 -top-8 -right-8 ${
        selected ? "bg-[#cba6f7] opacity-[0.08]" : "bg-gray-500 opacity-0"
      }`} />

      {/* Radial glow on select — igual ao CTA card da homepage */}
      {selected && (
        <div
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(203,166,247,0.08),transparent_55%)]"
        />
      )}
      <div className="relative z-10 flex gap-4 items-start">
        {/* Letter badge — mesmo estilo dos step numbers */}
        <div
          className={`shrink-0 flex items-center justify-center rounded-xl text-xs font-bold w-8 h-8 mt-0.5 transition-all ${
            selected
              ? "bg-[#cba6f7] text-[#401e66]"
              : "bg-gray-950/85 text-gray-400 border border-gray-800"
          }`}
        >
          {labels[index]}
        </div>
        <div className="flex-1 min-w-0">
          <p className={`font-semibold text-sm leading-snug mb-1 ${selected ? "text-[#ededed]" : "text-[#cdd6f4]"}`}>
            {option.label}
          </p>
          <p className="text-xs leading-relaxed text-[#a6adc8]">
            {option.detail}
          </p>
        </div>
      </div>
    </motion.button>
  );
}


function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <motion.div
      key="intro"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center gap-10 max-w-2xl mx-auto w-full"
    >
      {/* Heading — mesmo estilo do hero da homepage */}
      <div className="flex flex-col gap-4">
        <SectionLabel>DIAGNÓSTICO DE PRIVACIDADE</SectionLabel>
        <h1
          className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight bg-gradient-to-b from-white to-[#cba6f7] bg-clip-text text-transparent"
        >
          Descubra onde você está vulnerável.
        </h1>
        <p className="text-lg leading-relaxed text-[#a6adc8]">
          12 perguntas em 4 categorias para mapear sua soberania digital.
          Sem criar conta. Resultados imediatos.
        </p>
      </div>

      {/* Category cards — mesma linguagem dos feature cards da homepage */}
      <div className="grid grid-cols-2 gap-4 w-full">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.07 }}
            className="relative overflow-hidden flex flex-col items-start gap-4 p-6 rounded-2xl text-left bg-gradient-to-br from-gray-900 to-gray-950/80 border border-gray-800 backdrop-blur-md shadow-2xl"
          >
            {/* Glow / Gradient Blur */}
            <div className="absolute rounded-full blur-[40px] opacity-[0.05] pointer-events-none w-32 h-32 bg-[#89b4fa] -top-8 -right-8" />
            
            <div className="relative z-10 flex flex-col gap-4 w-full">
              <IconBox>
                <span className="text-xl leading-none">{cat.icon}</span>
              </IconBox>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold leading-snug text-[#cdd6f4]">
                  {cat.title}
                </p>
                <p className="text-xs text-[#a6adc8]">
                  3 perguntas
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA — idêntico ao botão primário da homepage */}
      <PrimaryBtn onClick={onStart}>
        Começar o Diagnóstico
        <ArrowRight size={18} />
      </PrimaryBtn>
    </motion.div>
  );
}


function QuestionScreen({ question, category, globalIndex, totalQuestions, selectedPoints, onSelect, onBack }: {
  question: Question; category: Category; globalIndex: number; totalQuestions: number;
  selectedPoints: 0 | 5 | 10 | undefined; onSelect: (p: 0 | 5 | 10) => void; onBack: () => void;
}) {
  return (
    <motion.div
      key={`q-${question.id}`}
      initial={{ opacity: 0, x: 28 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -28 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-8 w-full max-w-2xl mx-auto"
    >
      {/* Header da pergunta */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          {/* Section label com o padrão </> da homepage */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#89b4fa]/10 text-[#89b4fa] border border-[#89b4fa]/20"
          >
            <span>{category.icon}</span>
            <span>{category.title}</span>
          </div>
          <span className="text-xs tabular-nums text-[#a6adc8]">
            {globalIndex + 1} / {totalQuestions}
          </span>
        </div>
        <ProgressBar current={globalIndex + 1} total={totalQuestions} />
      </div>

      {/* Pergunta */}
      <div className="flex flex-col gap-2">
        {/* Subtítulo no estilo SectionLabel da homepage */}
        <p className="text-xs font-bold tracking-[1.2px] uppercase text-[#89b4fa]">
          {category.subtitle}
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight text-[#ededed]">
          {question.text}
        </h2>
      </div>

      {/* Box didático - Explicação da importância */}
      <div className="flex gap-3 items-start text-sm leading-relaxed text-gray-400">
        <Lightbulb size={18} className="text-[#cba6f7] shrink-0 mt-0.5" />
        <p>{question.whyItMatters}</p>
      </div>

      {/* Opções */}
      <div className={`flex flex-col gap-3 ${selectedPoints !== undefined ? "pointer-events-none" : ""}`}>
        {question.options.map((opt, i) => (
          <OptionCard
            key={i}
            option={opt}
            index={i}
            selected={selectedPoints === opt.points}
            onSelect={() => onSelect(opt.points)}
          />
        ))}
      </div>

      {/* Navegação — botão Voltar igual ao GhostButton da homepage */}
      <div className={`flex items-center justify-between pt-1 ${selectedPoints !== undefined ? "pointer-events-none opacity-50" : ""}`}>
        <GhostBtn onClick={onBack} className="!px-5 !py-3 !text-sm">
          <ArrowLeft size={15} />
          Voltar
        </GhostBtn>
        <p className="text-xs text-[#a6adc8]/40">
          {selectedPoints === undefined
            ? "Selecione uma opção para avançar"
            : "✓ Avançando..."}
        </p>
      </div>
    </motion.div>
  );
}


function ScoreMeter({ score, color }: { score: number; color: string }) {
  const max = 120;
  const pct = score / max;
  const r = 52;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - pct * circumference;

  return (
    <div className="relative inline-flex items-center justify-center shrink-0">
      <svg width="136" height="136" viewBox="0 0 136 136">
        <circle cx="68" cy="68" r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="10" />
        <motion.circle
          cx="68" cy="68" r={r}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="-rotate-90 origin-center"
        />
      </svg>
      <div className="absolute flex flex-col items-center leading-none">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl font-extrabold text-[#ededed]"
        >
          {score}
        </motion.span>
        <span className="text-xs mt-1 text-[#a6adc8]">de 120</span>
      </div>
    </div>
  );
}

function getRecommendation(catId: string, score: number): string {
  if (catId === "navegacao") {
    if (score < 15) {
      return "Migre do Chrome/Edge para o Brave ou LibreWolf, altere seu buscador padrão para DuckDuckGo ou Startpage e passe a usar front-ends alternativos (Invidious, Nitter) para diminuir o rastreamento diário.";
    }
    if (score < 25) {
      return "Configure a privacidade estrita do Firefox ou adote o LibreWolf/Mullvad Browser por padrão. Experimente usar o SearXNG como buscador alternativo e continue usando front-ends livres.";
    }
    return "Sua navegação já está excelente. Continue utilizando LibreWolf/Mullvad Browser e SearXNG de forma anônima.";
  }
  if (catId === "comunicacao") {
    if (score < 15) {
      return "Substitua o WhatsApp e o SMS pelo Signal para conversas seguras. Crie um e-mail criptografado (Proton Mail) e utilize pseudônimos (SimpleLogin ou Addy.io) para cadastros secundários, evitando fornecer seu CPF real.";
    }
    if (score < 25) {
      return "Experimente migrar conversas críticas para mensageiros totalmente descentralizados (SimpleX Chat ou Session) e expanda o uso de máscaras de e-mail nos seus novos cadastros.";
    }
    return "Seus canais de comunicação estão muito bem protegidos. Continue com o uso consistente de SimpleX/Session e e-mails mascarados.";
  }
  if (catId === "seguranca") {
    if (score < 15) {
      return "Comece a usar um gerenciador de senhas dedicado (Bitwarden) para gerar e guardar senhas exclusivas para cada site. Ative a autenticação de dois fatores (2FA) via aplicativo (Aegis ou Ente Auth).";
    }
    if (score < 25) {
      return "Migre suas credenciais importantes para o uso de chaves físicas de segurança (YubiKey) e use o OnionShare ou LocalSend para transferência direta e segura de arquivos.";
    }
    return "Seu controle de senhas e autenticação está no nível máximo de proteção digital.";
  }
  if (catId === "infraestrutura") {
    if (score < 15) {
      return "Ative uma VPN confiável (Mullvad ou Proton) sempre que utilizar redes Wi-Fi públicas. Comece a fazer backups locais regulares e planeje migrar do Windows/macOS para o Linux (como o Linux Mint).";
    }
    if (score < 25) {
      return "Configure a criptografia de disco completo (FDE) no seu computador (BitLocker/LUKS) e implemente a regra de backups 3-2-1 com criptografia local (VeraCrypt/Cryptomator). Ative DNS Criptografado.";
    }
    return "Infraestrutura muito robusta. Backups criptografados sob seu controle e sistemas livres (Linux) estão em pleno uso.";
  }
  return "";
}

function ResultsScreen({ answers, onRestart, onClose }: {
  answers: Answers; onRestart: () => void; onClose: () => void;
}) {
  const score = totalScore(answers);
  const level = getLevel(score);
  const recommendations = categories
    .map((cat) => {
      const s = categoryScore(answers, cat);
      return { cat, score: s, rec: getRecommendation(cat.id, s) };
    })
    .filter((item) => item.score < 25);

  useEffect(() => {
    localStorage.setItem("ghost_score", String(score));
    localStorage.setItem("ghost_level", level.label);
    window.dispatchEvent(new Event("ghost-quiz-completed"));
  }, [score, level.label]);

  const levelBgClasses: Record<string, string> = {
    "Iniciante": "bg-[#f38ba8]",
    "Silhueta": "bg-[#fab387]",
    "Sombra": "bg-[#f9e2af]",
    "Espectro": "bg-[#a6e3a1]",
    "Fantasma": "bg-[#cba6f7]",
  };

  const levelTextClasses: Record<string, string> = {
    "Iniciante": "text-[#f38ba8]",
    "Silhueta": "text-[#fab387]",
    "Sombra": "text-[#f9e2af]",
    "Espectro": "text-[#a6e3a1]",
    "Fantasma": "text-[#cba6f7]",
  };

  return (
    <motion.div
      key="results"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-6 w-full max-w-2xl mx-auto"
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <SectionLabel>RESULTADO DO DIAGNÓSTICO</SectionLabel>
      </div>

      {/* Score card — mesmo estilo do CTA card da homepage */}
      <div
        className="relative overflow-hidden rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-8 border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950/80 shadow-2xl backdrop-blur-md"
      >
        {/* Glow decorativo igual ao CTA */}
        <div
          className={`absolute pointer-events-none rounded-full blur-[70px] opacity-[0.08] w-60 h-60 -top-15 -right-10 ${
            levelBgClasses[level.label] || "bg-[#cba6f7]"
          }`}
        />
        <ScoreMeter score={score} color={level.color} />
        <div className="relative z-10 flex flex-col gap-2 text-center sm:text-left">
          <div
            className={`flex items-center gap-2 justify-center sm:justify-start font-bold text-2xl ${
              levelTextClasses[level.label] || "text-[#cba6f7]"
            }`}
          >
            {level.icon}
            {level.label}
          </div>
          <p className="text-lg font-semibold text-[#ededed]">{level.sublabel}</p>
          <p className="text-sm leading-relaxed text-gray-400">{level.description}</p>
        </div>
      </div>

      {/* Category breakdown — mesmo card style dos feature cards */}
      <div
        className="relative overflow-hidden rounded-2xl p-6 flex flex-col gap-5 bg-gradient-to-br from-gray-900 to-gray-950/80 border border-gray-800 backdrop-blur-md shadow-2xl"
      >
        {/* Glow / Gradient Blur */}
        <div className="absolute rounded-full blur-[50px] opacity-[0.05] pointer-events-none w-40 h-40 bg-[#cba6f7] -top-10 -right-10" />

        <div className="relative z-10 flex flex-col gap-5 w-full">
          <p className="text-xs font-bold tracking-[1.2px] uppercase text-[#89b4fa]">
            Análise por Categoria
          </p>
          <div className="flex flex-col gap-4">
            {categories.map((cat) => {
              const s = categoryScore(answers, cat);
              const pct = (s / 30) * 100;
              const barTextClass = pct >= 70 ? "text-[#a6e3a1]" : pct >= 40 ? "text-[#f9e2af]" : "text-[#f38ba8]";
              const barBgClass = pct >= 70 ? "bg-[#a6e3a1]" : pct >= 40 ? "bg-[#f9e2af]" : "bg-[#f38ba8]";
              return (
                <div key={cat.id} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[#cdd6f4]">
                      {cat.icon} {cat.title}
                    </span>
                    <span className={`text-sm font-bold tabular-nums ${barTextClass}`}>
                      {s}/30
                    </span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden bg-gray-950 border border-gray-800/60">
                    <motion.div
                      className={`h-full rounded-full ${barBgClass}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Ações Recomendadas — card estilo bento da homepage */}
      {recommendations.length > 0 && (
        <div
          className="relative overflow-hidden rounded-2xl p-6 flex flex-col gap-4 bg-[#89b4fa]/[0.03] border border-[#89b4fa]/20 backdrop-blur-md shadow-2xl"
        >
          {/* Glow / Gradient Blur */}
          <div className="absolute rounded-full blur-[40px] opacity-[0.05] pointer-events-none w-32 h-32 bg-[#89b4fa] -top-8 -right-8" />
          
          <div className="relative z-10 flex flex-col gap-3 w-full">
            <p className="text-xs font-bold tracking-[1.2px] uppercase text-[#89b4fa]">
              💡 Ações Recomendadas
            </p>
            <div className="flex flex-col gap-4">
              {recommendations.map(({ cat, score, rec }) => (
                <div key={cat.id} className="flex flex-col gap-1.5 border-l-2 border-[#cba6f7]/40 pl-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-[#cdd6f4]">{cat.icon} {cat.title}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-900 border border-gray-850 text-gray-400 font-medium">Score: {score}/30</span>
                  </div>
                  <p className="text-xs leading-relaxed text-gray-400">
                    {rec}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTAs — idênticos aos da homepage */}
      <div className="flex flex-col sm:flex-row gap-3 pt-1">
        <PrimaryBtn onClick={onClose} className="flex-1 justify-center">
          Explorar Alternativas Livres
          <ArrowRight size={17} />
        </PrimaryBtn>
        <GhostBtn onClick={onRestart}>
          <RotateCcw size={15} />
          Refazer
        </GhostBtn>
      </div>
    </motion.div>
  );
}


function shuffleOptions(question: Question): Question {
  const shuffled = [...question.options].sort(() => Math.random() - 0.5) as [Option, Option, Option];
  return { ...question, options: shuffled };
}


function CalculatingScreen() {
  const [progress, setProgress] = useState(0);
  const [textIdx, setTextIdx] = useState(0);
  const stepsText = [
    "Analisando respostas...",
    "Mapeando impressões digitais...",
    "Calculando índice de privacidade...",
    "Gerando ações recomendadas..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          return 100;
        }
        return p + 2;
      });
    }, 30);

    const textTimer = setInterval(() => {
      setTextIdx((i) => (i < stepsText.length - 1 ? i + 1 : i));
    }, 450);

    return () => {
      clearInterval(timer);
      clearInterval(textTimer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12 max-w-md mx-auto text-center">
      <div className="relative flex items-center justify-center w-24 h-24">
        {/* Outer glowing ring */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#cba6f7]/30 animate-spin animate-duration-[8s]" />
        {/* Inner spinner */}
        <div className="w-16 h-16 rounded-full border-4 border-t-[#cba6f7] border-r-transparent border-b-[#89b4fa] border-l-transparent animate-spin" />
        <img src={logoIcon} className="absolute w-7 h-7 object-contain animate-pulse" alt="Ghostifier Icon" />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-bold text-white tracking-wide">
          Análise de Soberania Digital
        </h3>
        <p className="text-xs text-gray-400 h-4 transition-all duration-300">
          {stepsText[textIdx]}
        </p>
      </div>
      <div className="w-full h-1.5 rounded-full overflow-hidden bg-gray-950 border border-gray-900 mt-2">
        <style>{`.ghost-progress-bar { width: ${progress}%; }`}</style>
        <div className="h-full bg-gradient-to-r from-[#89b4fa] to-[#cba6f7] ghost-progress-bar" />
      </div>
    </div>
  );
}


type QuizStep = "intro" | "question" | "calculating" | "results";

export function Quiz({ onClose }: { onClose: (goToHub?: boolean) => void }) {
  const [step, setStep] = useState<QuizStep>(() => {
    const savedStep = sessionStorage.getItem("ghost_quiz_step");
    if (savedStep === "calculating") return "question";
    return (savedStep as QuizStep) || "intro";
  });
  const [currentIdx, setCurrentIdx] = useState(() => {
    const savedIdx = sessionStorage.getItem("ghost_quiz_idx");
    return savedIdx ? Number(savedIdx) : 0;
  });
  const [answers, setAnswers] = useState<Answers>(() => {
    const savedAnswers = sessionStorage.getItem("ghost_quiz_answers");
    return savedAnswers ? JSON.parse(savedAnswers) : {};
  });
  const [questions, setQuestions] = useState<Array<{ question: Question; category: Category }>>(() =>
    categories.flatMap((cat) =>
      cat.questions.map((q) => ({ question: shuffleOptions(q), category: cat }))
    )
  );

  useEffect(() => {
    sessionStorage.setItem("ghost_quiz_answers", JSON.stringify(answers));
    sessionStorage.setItem("ghost_quiz_idx", String(currentIdx));
    sessionStorage.setItem("ghost_quiz_step", step === "calculating" ? "question" : step);
  }, [answers, currentIdx, step]);

  function handleSelect(points: 0 | 5 | 10) {
    const qId = questions[currentIdx].question.id;
    if (answers[qId] !== undefined) return;
    
    const newAnswers = { ...answers, [qId]: points };
    setAnswers(newAnswers);
    setTimeout(() => {
      if (currentIdx < questions.length - 1) {
        setCurrentIdx((i) => i + 1);
      } else {
        setStep("calculating");
        setTimeout(() => {
          setStep("results");
        }, 1800);
      }
    }, 420);
  }

  function handleBack() {
    if (currentIdx === 0) setStep("intro");
    else setCurrentIdx((i) => i - 1);
  }

  function handleRestart() {
    sessionStorage.removeItem("ghost_quiz_answers");
    sessionStorage.removeItem("ghost_quiz_idx");
    sessionStorage.removeItem("ghost_quiz_step");
    setAnswers({});
    setCurrentIdx(0);
    setQuestions(
      categories.flatMap((cat) =>
        cat.questions.map((q) => ({ question: shuffleOptions(q), category: cat }))
      )
    );
    setStep("intro");
  }

  function handleClose(goToHub?: boolean) {
    sessionStorage.removeItem("ghost_quiz_answers");
    sessionStorage.removeItem("ghost_quiz_idx");
    sessionStorage.removeItem("ghost_quiz_step");
    onClose(goToHub);
  }

  const current = questions[currentIdx];

  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col overflow-hidden bg-gray-950 font-sans"
    >
      {/* Header — apenas o logo */}
      <div
        className="shrink-0 flex items-center h-16 md:h-20 bg-gray-950/80 backdrop-blur-md border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full flex items-center justify-between">
          <LogoSvg className="h-8 w-auto" />
        </div>
      </div>

      {/* Botão de voltar — abaixo do header, fora dele */}
      <div className="shrink-0 w-full max-w-7xl mx-auto px-6 md:px-10 pt-4 pb-1">
        <motion.button
          onClick={() => handleClose(false)}
          whileHover={{ x: -3 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="inline-flex items-center gap-2 text-sm font-semibold cursor-pointer text-gray-400 hover:text-white transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-[#cba6f7] focus-visible:outline-none"
        >
          <ArrowLeft size={14} />
          Voltar ao início
        </motion.button>
      </div>

      {/* Body — rolável se exceder a tela, centralizado verticalmente se houver espaço */}
      <div className="flex-1 overflow-y-auto px-6 md:px-10 py-6 md:py-10 flex justify-center items-start">
        <div className="w-full max-w-2xl my-auto">
          {step === "intro" && <IntroScreen onStart={() => setStep("question")} />}
          {step === "question" && current && (
            <QuestionScreen
              question={current.question}
              category={current.category}
              globalIndex={currentIdx}
              totalQuestions={questions.length}
              selectedPoints={answers[current.question.id]}
              onSelect={handleSelect}
              onBack={handleBack}
            />
          )}
          {step === "calculating" && <CalculatingScreen />}
          {step === "results" && (
            <ResultsScreen answers={answers} onRestart={handleRestart} onClose={() => handleClose(true)} />
          )}
        </div>
      </div>
    </div>
  );
}
