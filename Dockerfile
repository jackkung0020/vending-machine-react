FROM node:14.21.1

WORKDIR /dock
COPY . .

RUN yarn install

CMD ["yarn", "dev"]