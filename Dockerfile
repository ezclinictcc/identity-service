FROM node

WORKDIR /usr/app

COPY package.json ./

#RUN npm install

#RUN npm install yarn

RUN yarn

COPY . .

EXPOSE 8080

CMD ["yarn","build-dev"]

RUN yarn add typeorm pg reflect-metadata


#
# EXECUTE COMMAND
#
#docker build -t identity_service .
#
#Visualizar containers
#docker ps
#
#Executar container
#
#docker run -p 8080:8080 identity_service
#
#
#docker exec -it intelligent_davinci /bin/bash
#
#Verificar ip do container
#
# docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' IDS
