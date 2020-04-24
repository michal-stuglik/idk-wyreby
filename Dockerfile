FROM node:latest as idk

WORKDIR /app

# By copying over requirements first, we make sure that Docker will cache
# our installed requirements rather than reinstall them on every build
ADD img /app/img
COPY ./src /app/src
COPY ./public /app/public
COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

RUN npm install -g serve
RUN npm install
RUN npm run-script build
