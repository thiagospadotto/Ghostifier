# Etapa 1: Build do Frontend React/Vite
FROM node:20-alpine AS build

WORKDIR /app

# Copiar arquivos de manifesto de dependências
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm ci

# Copiar o restante do código da aplicação
COPY . .

# Argumento para URL da API em build (opcional se usando proxy do Nginx)
ARG VITE_API_URL=""
ENV VITE_API_URL=$VITE_API_URL

# Executar build de produção
RUN npm run build

# Etapa 2: Servidor Nginx em produção
FROM nginx:alpine

# Copiar build estático
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar arquivo de configuração do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
