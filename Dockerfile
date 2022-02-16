FROM node:16-alpine3.14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate
RUN npx tsc

EXPOSE 8000
CMD ["npm","run", "docker-start"]
