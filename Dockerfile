FROM node
ENV NPM_CONFIG_LOGLEVEL warn
ENV LOG_LEVEL info
ENV PORT 3000

WORKDIR /usr/src/app

COPY package.json .
RUN npm install
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
