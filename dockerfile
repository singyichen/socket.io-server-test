FROM alpine:latest AS builder
RUN apk add --no-cache tzdata
RUN apk add --no-cache --update nodejs npm

ENV TZ=Asia/Taipei
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /src
COPY . .

RUN npm install -g npm@10.2.2
RUN npm install --production && npm cache clean --force

FROM alpine:latest
RUN apk add --no-cache --update nodejs npm
WORKDIR /src
COPY --from=builder /src .

EXPOSE 3000

CMD [ "node", "app" ]