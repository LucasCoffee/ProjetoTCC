FROM node:23-alpine

# 1. Cria a pasta e define as permissões antes de começar
RUN mkdir -p /app && chown -R node:node /app

WORKDIR /app

# 2. Copia os arquivos de dependências
COPY --chown=node:node package*.json ./

# 3. Muda para o usuário 'node' ANTES de instalar e copiar o resto
USER node

RUN npm install

# 4. Copia o restante do código com as permissões corretas
COPY --chown=node:node . .

EXPOSE 3000


CMD ["npm", "run", "dev"]
 