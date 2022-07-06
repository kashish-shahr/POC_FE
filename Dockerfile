# FOR BUILD
# Stage 1
# FROM node:16.15.0-alpine 
# RUN mkdir -p /app
# WORKDIR /app
# COPY package.json /app
# RUN npm install
# COPY . /app
# RUN npm run start
# CMD ["npm","run","start"]

# # Stage 2
# FROM nginx:1.17.1-alpine
# COPY --from=build-step /app/dist/text-editor-app /usr/share/nginx/html


# FOR DEV
FROM node

WORKDIR /usr/src/app/text-editor

COPY package*.json ./

RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install

EXPOSE 4201

CMD ["npm", "start"]



# docker build -t microsite-fe-image .
# docker run --name microsite-fe -p 4201:4201 -v /Users/sanketjain/Documents/Projects/POC/text-editor-app:/usr/src/app/text-editor microsite-fe-image

# inside package.json
# in scripts: replace "start":"ng serve" with "start":"ng serve --host=0.0.0.0 --port 4201"

# reference link : https://medium.com/bb-tutorials-and-thoughts/angular-local-development-with-docker-compose-13719b998e42