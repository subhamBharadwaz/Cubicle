# Cubicle - A Personal Assistant Website

## Technology - **MERN**

# Specs:

## 1. User authentication.(must be login or register to view the pages)

## 2. View current weather (can search by city names)

## 3. Vew latest news around the world.

## 4. Add Todo List.

## 5. Add Expenses.

## 6. Fitness Zone.

#

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

#

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

#

_Connect Backend with frontend:_

- concurrently - https://www.npmjs.com/package/concurrently

#

## Installation:

1.  Change **config/config.env.env** to **config/config.env** and change the following to your own values --->

```

NODE_ENV=  _(development or production)_

PORT= _(Your preferred port)_

MONGO_URI=  _(Your mongodb atlas uri)_

JWT_SECRET= _(add anything without any space)_
JWT_EXPIRE= (I used 30 days here as 30d)
JWT_COOKIE_EXPIRE= (I used 30 here)


```

2.  There are 4 scripts in package.json located in the root folder

```javascript
   "start": "NODE_ENV=production node server",
   "server": "nodemon server",
   "client": "npm start --prefix client",
   "dev": "concurrently \"npm run server\" \"npm run client\""

```

- To run in production mode run

```javascript
npm run start
```

- To run the backend server run

```javascript
npm run server
```

- To run client (react server) run

```javascript
npm run client
```

- To run both client and backend same time run

```javascript
npm run dev
```
