# FROM node:alpine
# WORKDIR /usr/src/app
# # COPY package.json
# # COPY package-lock.json

# COPY ./ /usr/src/app

# RUN npm install

# COPY . .

# RUN npm build



# FROM nginx:latest

# COPY --from=build /usr/src/app/todo-list /usr/share/nginx/html

# EXPOSE 80


# CMD /usr/src/app/node_modules/.bin/ng serve --host 0.0.0.0 --disableHostCheck
# FROM node:latest as build

# WORKDIR /usr/local/app



# COPY ./ /usr/local/app

# RUN npm install


# RUN npm run build



# FROM nginx:latest

# COPY --from=build /usr/local/app/todo-list /usr/share/nginx/html

# # COPY . .

# EXPOSE 80




# FROM node:latest as node

# WORKDIR /usr/local/app

# COPY . /usr/local/app

# RUN npm install


# RUN npm run build --prod



# FROM nginx:alpine

# COPY --from=node /usr/local/app/todo-list /usr/share/nginx/html

# # COPY . .

# EXPOSE 80


FROM nginx:1.17.1-alpine
COPY /dist/todo-list /usr/share/nginx/html
EXPOSE 4200