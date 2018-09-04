FROM node:10.9.0-alpine
WORKDIR /usr/local/src
COPY . .
RUN yarn
RUN yarn run build
ENV HOST 0.0.0.0
EXPOSE 3000
CMD [ "yarn", "start" ]
