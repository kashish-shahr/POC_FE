FROM node:12.7-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:12.7-alpine AS prod-stage
COPY --from=build /app/dist/angular-docker /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g"]
