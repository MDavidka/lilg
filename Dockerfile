# syntax=docker/dockerfile:1
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN (npm ci && npm cache clean --force) || (npm install --no-audit --no-fund --prefer-offline && npm cache clean --force)
COPY . .
RUN npm run build

FROM node:20-alpine AS run
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist
EXPOSE 3000
ENV PORT=3000
CMD ["sh", "-c", "serve -s dist -l ${PORT:-3000}"]
