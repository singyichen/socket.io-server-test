# socket.io-server-test
A project to learn socket io server and unit testing with jest.

## Contents
- [Requirement](#requirement)
- [Install](#install)
- [Available Scripts](#available-scripts)
- [Docker Deployment](#docker-deployment)
- [Folder Definition](#folder-definition)
- [Folder Structure](#folder-structure)

## Requirement
- **Dependencies**
    - [node.js](https://nodejs.org/en/)：v14.18.0
    - [npm](https://www.npmjs.com/)：v6.14.15
    - [fastify](https://www.fastify.io/)：v4.10.2
    - [socket.io](https://socket.io/)：v4.5.1
- **Test**
    - [jest](https://jestjs.io/)：v29.3.1
    - [Postman](https://www.postman.com/)：v10.2.2   
- **DevOps**
    - [Docker](https://www.docker.com/)：v20.10.18

## Install
### Clone the project to local
```
git clone https://github.com/singyichen/socket.io-server-test.git
```

### Add `.env` to project
```
cp .env.example .env
vim .env
```

### Install Dependencies
```
npm i
```

## Available Scripts
In the project directory, you can run:

### To start the app in dev mode
```
npm run dev
```

### For production mode
```
npm start
```

### Run the test cases
```
npm run test
```

## Docker Deployment
### Use a single docker command
Build docker image

```
docker build -t socketio_server_test:1.0.0 --no-cache .
```

Run container

```
docker run -d --name socketio_server_test -p 3000:3000 --restart=always socketio_server_test:1.0.0
```

### Use docker compose
Build docker image and run container

```
docker compose up -d
```

## Folder Definition
- **src**
    - Usage of api for project

- **test**
    - Unit tests for api

## Folder Structure
```
│  .dockerignore
│  .env.example
│  .env
│  .eslintrc.json
│  .gitignore
│  .prettierignore
│  .prettierrc.json
│  app.js
│  docker-compose.yml
│  dockerfile
│  jest.config.js
│  nginxWithSocketIOServer.js
│  package-lock.json
│  package.json
│  README.md
│
├─src
│  │  api.js
│  └─ socketIO.js
│
└─test
    │  config.js
    └─ api.test.js    
```