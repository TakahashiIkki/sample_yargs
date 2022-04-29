FROM node:16.13.1-alpine as builder

ARG NODE_ENV="production"
ENV NODE_ENV ${NODE_ENV}
ENV TZ Asia/Tokyo
RUN apk add tzdata

EXPOSE 8000
STOPSIGNAL SIGTERM
WORKDIR /usr/src/app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install

COPY . .

RUN yarn build
