FROM node:alpine

WORKDIR /image-working-directory

COPY package.json package-lock.json ./
COPY /dist/ ./dist/
COPY /node_modules/ ./node_modules/

EXPOSE 8080

ENTRYPOINT ["npm", "run", "launch", "--loglevel", "error"]
