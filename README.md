# Cubicle - A Personal Assistant Website

## Technology - **MERN**

## Video & Screenshots

[![IMAGE ALT TEXT HERE](https://user-images.githubusercontent.com/72348711/134618635-3928ca5e-5253-4172-800a-b779f36749fa.png)](https://www.youtube.com/watch?v=bONb0hv2Eig)

![Home](https://user-images.githubusercontent.com/72348711/134617691-7541002b-66ab-407d-b73c-e18d87d64ce1.png)

![Register](https://user-images.githubusercontent.com/72348711/126858855-4e30369e-df8c-4096-a7eb-aeec161ee6da.png)

![Login](https://user-images.githubusercontent.com/72348711/126858863-f732ff1d-a9f8-496a-adb6-7dc44b575e27.png)

![Weather](https://user-images.githubusercontent.com/72348711/134617743-e31533fe-dcb5-4a31-8d69-b851e8a96878.png)

![News](https://user-images.githubusercontent.com/72348711/134617893-6d354ca3-9e29-47e6-ae71-51ca0c12c450.png)

![Live Chat](https://user-images.githubusercontent.com/72348711/134617830-59d93ee6-5c77-4ba7-a45d-6f17e7a47cda.png)

![Todo List](https://user-images.githubusercontent.com/72348711/134617782-3f3b0b47-7d4c-4141-b52a-65935590d1ac.png)

![Expense Tracker](https://user-images.githubusercontent.com/72348711/134617795-c0fffbd6-eeab-40b4-ac6b-c30fa4ccb5f5.png)

![Fitness](https://user-images.githubusercontent.com/72348711/126858923-642b9feb-1585-4786-b6a0-e7abf1a1300c.png)

---

## Specs

1.User authentication.(must be login or register to view the pages)

1.View current weather (can search by city names)

1.Vew latest news around the world.

1 Add Todo List.

1.Add Expenses.

1.Fitness Zone.

---

## Tools

- React - https://reactjs.org/
- Node.js - https://nodejs.org/en/
- VSCode - https://code.visualstudio.com/
- Postman - https://www.getpostman.com/
- Git - https://git-scm.com/
- MongoDB - https://www.mongodb.com/

## NPM Packages

_For Frontend:_

- axios - https://www.npmjs.com/package/axios
- react-icons - https://react-icons.github.io/react-icons/
- redux - https://redux.js.org/
- redux-thunk - https://www.npmjs.com/package/redux-thunk
- styled-components - https://styled-components.com/
- uuid - https://www.npmjs.com/package/uuid

_For Backend:_

- dotenv - https://github.com/motdotla/dotenv#readme
- morgan - https://github.com/expressjs/morgan
- colors - https://github.com/Marak/colors.js
- slugify - https://github.com/simov/slugify

- bcryptjs - https://github.com/dcodeIO/bcrypt.js#readme
- jsonwebtoken - https://github.com/auth0/node-jsonwebtoken

- express-mongo-sanitize - https://github.com/fiznool/express-mongo-sanitize#readme
- xss-clean - https://github.com/jsonmaur/xss-clean
- helmet - https://github.com/helmetjs/helmet
- hpp - https://github.com/analog-nico/hpp
- express-rate-limit - https://github.com/nfriedly/express-rate-limit
- nodemon - https://www.npmjs.com/package/nodemon

_Connect Backend with frontend:_

- concurrently - https://www.npmjs.com/package/concurrently

---

## Installation

1.Change **config/config.env.env** to **config/config.env** and change the following to your own values --->

```console
NODE_ENV=  _(development or production)_

PORT= _(Your preferred port)_

MONGO_URI=  _(Your mongodb atlas uri)_

JWT_SECRET= _(add anything without any space)_
JWT_EXPIRE= (I used 30 days here as 30d)
JWT_COOKIE_EXPIRE= (I used 30 here)
```

2.There are 4 scripts in package.json located in the root folder

```javascript
   "start": "NODE_ENV=production node server",
   "server": "nodemon server",
   "client": "npm start --prefix client",
   "dev": "concurrently \"npm run server\" \"npm run client\""
```

- To run in production mode run

```console
npm run start
```

- To run the backend server run

```console
npm run server
```

- To run client (react server) run

```console
npm run client
```

- To run both client and backend same time run

```console
npm run dev
```
