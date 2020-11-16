FROM node:14 as builder
RUN mkdir /words-vue
WORKDIR /words-vue
COPY . /words-vue
RUN npm install
RUN npm run build

FROM nginx
COPY --from=builder /words-vue/dist /usr/share/nginx/html
