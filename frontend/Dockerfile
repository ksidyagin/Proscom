
# Stage 1: build
FROM node

WORKDIR ./src/app

COPY package*.json ./

RUN npm install --legacy-peer-deps
RUN npm install -g @angular/cli

COPY . .

RUN npm run build

EXPOSE 4200