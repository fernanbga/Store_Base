# 1) Build frontend
FROM node:20-alpine AS frontend
WORKDIR /app/client
COPY client/package*.json ./
RUN npm ci
COPY client/ .
RUN npm run build

# 2) Install backend deps (prod)
FROM node:20-alpine AS backend
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

# 3) Runtime
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Backend deps
COPY --from=backend /app/node_modules ./node_modules

# Backend source
COPY app.js ./app.js
COPY config ./config
COPY routes ./routes
COPY models ./models
COPY utils ./utils
COPY controllers ./controllers
COPY package*.json ./

# Built frontend
COPY --from=frontend /app/client/dist ./client/dist

EXPOSE 3000
CMD ["node", "app.js"]
