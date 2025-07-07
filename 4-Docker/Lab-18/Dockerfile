FROM node:18

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN mkdir -p /app/logs

VOLUME ["/app/logs"]

CMD ["npm", "start"]

