
# Stage 1: build
FROM node:19 AS development

WORKDIR /proscom/frontend/src/app

COPY package*.json ./

RUN npm install --legacy-peer-deps
RUN npm install -g @angular/cli@15.1.0

COPY . .

RUN npm run build

EXPOSE 4200