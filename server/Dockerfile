FROM node:17.3.1

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

COPY prisma/schema.prisma ./prisma/
RUN npx prisma generate

COPY . .

RUN npm run build

EXPOSE 8000
CMD ["npm", "start"]