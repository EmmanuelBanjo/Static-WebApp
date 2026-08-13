FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY index.html about.html contact.html ./
COPY css/ ./css/
COPY js/ ./js/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]