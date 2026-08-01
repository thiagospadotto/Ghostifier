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

## 📖 Guia Passo a Passo para Executar o Ghostifier

Nunca rodou um projeto desse tipo antes? Não se preocupe! Siga este guia simples e explicativo.

---

### 1️⃣ Pré-requisito: Instalar o Node.js

O **Node.js** é o programa necessário para interpretar e executar o código do Ghostifier no seu computador.

1. Acesse o site oficial: [nodejs.org](https://nodejs.org/)
2. Baixe a versão **LTS** (Recomendada para a maioria dos usuários).
3. Abra o instalador baixado e siga o assistente avançando nas telas (*Next* -> *Next* -> *Install*).

---

### 2️⃣ Obter os Arquivos do Projeto

Escolha uma das duas formas abaixo para ter o código no seu computador:

#### Opção A: Baixar o arquivo ZIP (Mais simples para iniciantes)
1. No topo desta página do repositório no GitHub, clique no botão verde **`<> Code`**.
2. Clique na opção **`Download ZIP`**.
3. Vá até a pasta de Downloads do seu computador, clique com o botão direito no arquivo `.zip` baixado e selecione **Extrair Tudo...**.
4. Escolha uma pasta fácil de encontrar (ex: *Documentos* ou *Área de Trabalho*).

#### Opção B: Usar o Git (Para quem já utiliza Git no terminal)
Abra seu terminal e execute:
```bash
git clone https://github.com/thiagospadotto/Ghostifier.git
cd Ghostifier
```

---

### 3️⃣ Abrir o Terminal na Pasta do Projeto

1. Abra a pasta onde o projeto foi extraído (onde você vê arquivos como `package.json` e as pastas `src` e `server`).
2. **No Windows:** 
   - Clique com o botão direito em uma área vazia dentro da pasta e selecione **"Abrir no Terminal"** (ou **"Abrir janela do PowerShell aqui"**).
   - Alternativamente, clique na barra de endereço no topo da janela da pasta, digite `cmd` e pressione **Enter**.
3. **No Mac / Linux:** 
   - Abra a aplicação **Terminal** e use o comando `cd` seguido do caminho da pasta (ou clique com o botão direito na pasta e selecione *Novo Terminal na Pasta*).

---

### 4️⃣ Instalar as Dependências do Projeto

No terminal aberto na pasta do projeto, digite o comando abaixo e aperte a tecla **Enter**:

```bash
npm install
```

> 💡 **O que isso faz?** O comando baixa e instala automaticamente todas as bibliotecas de código necessárias para que a aplicação funcione corretamente. Aguarde até a conclusão.

---

### 5️⃣ Iniciar a Aplicação (Servidor Backend + Interface Frontend)

O Ghostifier é composto por duas partes que trabalham juntas: o **Backend** (servidor de dados) e o **Frontend** (a interface visual).

#### Passo A: Ligar o Servidor Backend
1. No terminal que já está aberto, digite:
   ```bash
   npm run server
   ```
2. Você verá uma mensagem confirmando que o servidor está ativo (ex: `Servidor Ghostifier rodando na porta 3001`).
3. ⚠️ **IMPORTANTE:** Não feche essa janela do terminal! Ela deve continuar aberta para manter o servidor funcionando.

#### Passo B: Ligar a Interface Frontend
1. **Abra uma SEGUNDA janela ou aba do terminal** na mesma pasta do projeto.
2. Na nova janela, digite o comando:
   ```bash
   npm run dev
   ```
3. O terminal iniciará a interface e mostrará o link local: `http://localhost:5173`.

---

### 6️⃣ Acessar o Ghostifier

Abra seu navegador de internet de preferência (Chrome, Edge, Firefox, Brave, Safari, etc.) e digite ou clique no link abaixo:

👉 **[http://localhost:5173](http://localhost:5173)**

Pronto! O Ghostifier estará completamente funcional e rodando no seu computador! 🎉

---

## 🐳 Método Alternativo: Executando via Docker

Se você é desenvolvedor ou prefere utilizar o **Docker Desktop**:

1. Abra o terminal na raiz do projeto.
2. Suba os containers com o comando:
   ```bash
   docker compose up -d --build
   ```
3. Acesse a aplicação no navegador: **[http://localhost:5173](http://localhost:5173)**.
4. Para encerrar os serviços quando finalizar:
   ```bash
   docker compose down
   ```

---

## ❓ Solução de Problemas Frequentes (FAQ)

<details>
<summary><b>1. Deu erro "npm não é reconhecido como um comando interno ou externo"</b></summary>
<br />
Isso ocorre quando o Node.js não está instalado ou o terminal foi aberto antes da conclusão da instalação. 
<b>Solução:</b> Instale o Node.js pelo site <a href="https://nodejs.org">nodejs.org</a>, feche todas as janelas do terminal e abra-o novamente.
</details>

<details>
<summary><b>2. O site abriu mas não carrega a lista de alternativas ou dá erro de API</b></summary>
<br />
<b>Solução:</b> Verifique se você executou o comando <code>npm run server</code> no primeiro terminal e se a janela continua aberta. O backend (porta 3001) precisa estar ativo ao mesmo tempo em que a interface visual é usada.
</details>

<details>
<summary><b>3. Como eu faço para parar o programa depois de usar?</b></summary>
<br />
<b>Solução:</b> Clique nas janelas do terminal onde os comandos estão rodando e aperte as teclas <code>Ctrl + C</code> no teclado, ou simplesmente feche as janelas do terminal.
</details>

---

## 📝 Licença
Este projeto está licenciado sob a licença [MIT](LICENSE).
