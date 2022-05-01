FROM node:16.14.2-alpine as builder

ARG NODE_ENV="production"
ENV NODE_ENV ${NODE_ENV}
ENV TZ Asia/Tokyo
RUN apk add tzdata

STOPSIGNAL SIGTERM
WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install -–production=false

COPY . .

RUN yarn build
