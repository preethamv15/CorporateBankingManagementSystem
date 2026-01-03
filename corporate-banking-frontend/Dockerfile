# -------- Stage 1: Build Angular --------
FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# -------- Stage 2: Serve with Nginx --------
FROM nginx:alpine

# 🔥 REMOVE DEFAULT NGINX CONFIG
RUN rm /etc/nginx/conf.d/default.conf

# 🔥 COPY ANGULAR BUILD OUTPUT
COPY --from=build /app/dist/corporate-banking-frontend /usr/share/nginx/html

# 🔥 COPY OUR NGINX CONFIG
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
