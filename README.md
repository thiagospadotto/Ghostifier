# 👻 Ghostifier

![Status do CI](https://github.com/thiagospadotto/Ghostifier/actions/workflows/ci.yml/badge.svg)
![React](https://img.shields.io/badge/Frontend-React%20%7C%20Vite%20%7C%20TS-61DAFB?logo=react)
![NodeJS](https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-339933?logo=nodedotjs)
![TailwindCSS](https://img.shields.io/badge/Styling-Tailwind%20v4-38B2AC?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-blue.svg)

O **Ghostifier** é uma plataforma *Full Stack* voltada à conscientização sobre privacidade digital, soberania de dados e curadoria de alternativas *open-source*. O sistema combina um quiz interativo para diagnóstico de perfil digital e um hub estruturado de ferramentas focadas em privacidade sob a filosofia *Local-First*.

---

## 🚀 Tecnologias Utilizadas

### Frontend
- **React** (com TypeScript)
- **Vite** 
- **Tailwind CSS v4**
- **Satoshi** (via Fontshare)

### Backend & Persistência
- **Node.js** & **Express**
- **Persistência Documental Local-First** (`alternatives.json`)
- **Web Storage API (`localStorage`)**

---

## 🛠️ Como Executar o Projeto Localmente

### Pré-requisitos
- **Node.js** (v18 ou superior)

### 1. Clonar o Repositório
```bash
git clone [https://github.com/thiagospadotto/Ghostifier.git](https://github.com/thiagospadotto/Ghostifier.git)
cd Ghostifier
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Iniciar o Servidor Backend (API Express)
```bash
npm run server
```

### 4. Iniciar o Frontend (Vite)
```bash
npm run dev
```

### 5. Acessar o Projeto
Acesse [http://localhost:5173](http://localhost:5173) no seu navegador.

---

## 🐳 Executando com Docker

Se preferir rodar com Docker e Docker Compose:

```bash
# Iniciar a aplicação (Frontend + Backend)
docker compose up -d --build
```

Acesse o projeto em [http://localhost:5173](http://localhost:5173).

Para encerrar os containers:
```bash
docker compose down
```

## 📝 Licença
Este projeto está licenciado sob a licença [MIT](LICENSE).
