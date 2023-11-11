# Specify Node Version and Image
# Name Image development (can be anything)
FROM node

# Specify Working directory inside container
WORKDIR ./src/app

# Copy package-lock.json & package.json from host to inside container working directory
COPY package*.json ./

# Install deps inside container
RUN npm install

RUN npm run build

EXPOSE 3000

CMD [ "node", "dist/main"]