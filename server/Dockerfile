FROM node:20-alpine

WORKDIR /app

# Copiar manifesto de dependências do servidor
COPY package.json package-lock.json ./

# Instalar apenas dependências necessárias para produção
RUN npm ci --only=production

# Copiar o restante do código do backend
COPY . .

EXPOSE 3001

ENV PORT=3001
ENV NODE_ENV=production

CMD ["npm", "start"]
