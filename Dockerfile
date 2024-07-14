FROM node:18-alpine

WORKDIR /app

COPY package.json /app/package.json
COPY index.js /app

RUN npm install --only=prod

ENTRYPOINT ["npm", "run", "serve"]
