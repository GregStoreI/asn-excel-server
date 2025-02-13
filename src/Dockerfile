# excel-server/Dockerfile
FROM node:22.12.0
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "start:prod"]
