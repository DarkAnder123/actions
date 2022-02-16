FROM node:16-alpine3.14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate
RUN npx prisma migrate dev
RUN npx tsc
ENV SALT=10
ENV SECRET=MYAPP
ENV PORT=8000
EXPOSE 8000
CMD ["npm", "start"]
