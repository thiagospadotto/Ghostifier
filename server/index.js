import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, 'data', 'alternatives.json');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: process.env.CORS_ORIGIN || '*'
}));

app.use(express.json());

async function getAlternatives() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Erro ao ler banco de dados de alternativas:', error);
    return [];
  }
}

// Algoritmo de cálculo do Score de Privacidade (Score Invisível)
function calcularScoreInvisivel(app) {
  let score = 0;

  // 1. Transparência (max 40 pts)
  const transparency = app.privacyScore || 5;
  score += transparency * 4;

  // 2. Código Aberto (max 20 pts)
  if (app.isOpenSource) score += 20;

  // 3. Requer Conta (max 15 pts)
  if (!app.requerConta) score += 15;

  // 4. Dificuldade de Migração (max 15 pts)
  if (app.dificuldade === 1) score += 15;
  else if (app.dificuldade === 2) score += 12;
  else if (app.dificuldade === 3) score += 9;
  else if (app.dificuldade === 4) score += 5;

  // 5. Modelo de Negócio (max 10 pts)
  const model = (app.modeloNegocio || "").toLowerCase();
  if (model.includes("doaç") || model.includes("sem fins lucrativos") || (model.includes("gratuito") && !model.includes("anúncio") && !model.includes("publicidade"))) {
    score += 10;
  } else if (model.includes("freemium") || model.includes("premium") || model.includes("assinatura") || model.includes("pago") || model.includes("comercial") || model.includes("open-core")) {
    score += 5;
  }

  return score;
}

// Endpoint Principal: Busca e Filtragem por Categoria, Nível de Privacidade, Recomendados e Busca Textual
app.get('/api/alternatives', async (req, res) => {
  const { category, search, recommended, ghostLevel, minScore } = req.query;
  const alternatives = await getAlternatives();
  let filtered = [...alternatives];

  // 1. Filtro por Categoria
  if (category && category !== 'Todas') {
    if (category.toLowerCase() === 'recomendados') {
      filtered = filtered.filter(app => app.isRecomendado);
    } else {
      filtered = filtered.filter(app => app.categoria.toLowerCase() === category.toLowerCase());
    }
  }

  // 2. Filtro por Recomendados
  if (recommended === 'true') {
    filtered = filtered.filter(app => app.isRecomendado);
  }

  // 3. Filtro por Nível de Privacidade (Ghost Level)
  if (ghostLevel && ghostLevel !== 'Todos') {
    const level = ghostLevel.toString().toLowerCase();
    filtered = filtered.filter(app => {
      const score = calcularScoreInvisivel(app);
      if (level === 'iniciante') return score >= 30 && app.dificuldade <= 2;
      if (level === 'silhueta') return score >= 45 && app.dificuldade <= 3;
      if (level === 'sombra') return score >= 60 && app.dificuldade <= 4;
      if (level === 'espectro') return score >= 75;
      if (level === 'fantasma') return score >= 90;
      return true;
    });
  }

  // 4. Filtro por Score Mínimo de Privacidade
  if (minScore) {
    const scoreNum = parseFloat(minScore.toString());
    if (!isNaN(scoreNum)) {
      filtered = filtered.filter(app => calcularScoreInvisivel(app) >= scoreNum);
    }
  }

  // 5. Filtro por Busca Textual
  if (search) {
    const query = search.toString().toLowerCase();
    filtered = filtered.filter(app =>
      app.nomeAlternativa.toLowerCase().includes(query) ||
      app.nomeProprietario.toLowerCase().includes(query) ||
      app.descricao.toLowerCase().includes(query) ||
      app.modeloNegocio.toLowerCase().includes(query) ||
      app.categoria.toLowerCase().includes(query)
    );
  }

  res.json(filtered);
});

// Endpoint Secundário: Obter todas as categorias existentes
app.get('/api/categories', async (req, res) => {
  const alternatives = await getAlternatives();
  const categories = Array.from(new Set(alternatives.map(a => a.categoria)));
  res.json(categories);
});

app.listen(PORT, () => {
  console.log(`[Ghostifier Server] Rodando na porta ${PORT}`);
});
