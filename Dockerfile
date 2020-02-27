FROM node:10
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
RUN npm run build
CMD [ "npm", "start" ]
