FROM node:18.12.0-alpine

RUN apk update && apk add bash

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chmod +x ./wait-for-it.sh
RUN chmod +x ./wait-for-services-api.sh

EXPOSE 3000

CMD ["npm", "run", "wait"]
