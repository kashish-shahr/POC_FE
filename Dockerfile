# Stage 1
FROM node:16.15.0-alpine 
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
# RUN npm run start
CMD ["npm","run","start"]

# # Stage 2
# FROM nginx:1.17.1-alpine
# COPY --from=build-step /app/dist/text-editor-app /usr/share/nginx/html