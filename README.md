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
### `npm i`

## Available Scripts
In the project directory, you can run:

### To start the app in dev mode
#### `npm run dev`
Open `http://${process.env.IP_ADDRESS}:${process.env.PORT}` to view it in the browser.\

### For production mode
#### `npm start`

### Run the test cases
#### `npm run test`

## Docker Deployment
### `docker-compose up -d`

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
│  package-lock.json
│  package.json
│  README.md│
│
├─src
│  │  api.js
│  └─ socketIO.js
│
└─test
    │  config.js
    └─ api.test.js    
```