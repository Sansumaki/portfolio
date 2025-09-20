# Build-Stage
FROM node:20-alpine AS builder

WORKDIR /app

# pnpm installieren
RUN npm install -g pnpm

# Abhängigkeiten installieren
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Quellcode kopieren und bauen
COPY . .
RUN pnpm build

# Production-Stage
FROM node:20-alpine

WORKDIR /app

# Nur die nötigen Dateien kopieren
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build

EXPOSE 3000
ENV NODE_ENV=production

# Startbefehl
CMD ["node", "build"]
