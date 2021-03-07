FROM node:12 AS build
WORKDIR /app

COPY package* ./
RUN npm install

COPY tsconfig.json ./tsconfig.json
COPY .env ./.env
COPY public ./public
COPY src ./src
RUN npm run build

FROM nginx:1.18
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build ./app/build /usr/share/nginx/html
