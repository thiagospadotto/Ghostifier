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

app.get('/api/alternatives', async (req, res) => {
  const { category, search, recommended } = req.query;
  const alternatives = await getAlternatives();
  let filtered = [...alternatives];

  if (category && category !== 'Todas') {
    if (category.toLowerCase() === 'recomendados') {
      filtered = filtered.filter(app => app.isRecomendado);
    } else {
      filtered = filtered.filter(app => app.categoria.toLowerCase() === category.toLowerCase());
    }
  }

  if (recommended === 'true') {
    filtered = filtered.filter(app => app.isRecomendado);
  }

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

app.listen(PORT, () => {
  console.log(`[Ghostifier Server] Rodando na porta ${PORT}`);
});
