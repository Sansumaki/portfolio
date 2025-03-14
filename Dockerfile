FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json .
RUN pnpm ci
COPY .. .
RUN pnpm run build
RUN pnpm prune --production

FROM node:18-alpine AS website
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY ../package.json .
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "build" ]