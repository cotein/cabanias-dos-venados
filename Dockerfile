# Author : Vongkeo KSV

# Pull the base image 
FROM node:20.15.0 as build-stage

# set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build app
RUN npm run build

CMD ["node", ".output/server/index.mjs"]

EXPOSE 3000