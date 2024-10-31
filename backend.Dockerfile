FROM node

RUN mkdir /my-app
COPY . /my-app

WORKDIR /my-app

RUN rm -rf node_modules
RUN chmod -R 755 .

RUN npm install
RUN npm run build