FROM node:18.16.0-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa de producción
FROM build-stage as production-stage
WORKDIR /app
COPY --from=build-stage /app/package*.json ./
RUN npm ci --only=production
COPY --from=build-stage /app/.next ./.next
COPY --from=build-stage /app/static ./static
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]
