FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
COPY imc.js /usr/share/nginx/html/imc.js
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
