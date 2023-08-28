FROM node:14

ENV TZ=Asia/Taipei
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /src

COPY . .
RUN npm install && npm cache clean --force

EXPOSE 3000

CMD [ "node", "app" ]