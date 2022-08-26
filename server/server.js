require("dotenv").config();
const express = require('express')
const app = express()
const cors = require('cors')
const session = require("express-session");
const MongodbSession = require("connect-mongodb-session")(session);
const mongoose = require("mongoose");
const routes = require('./routes/routes')

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");

    app.listen(3001, () => {
      console.log(`Server listening on ${3001}`);
    });
  })
  .catch(console.error);

const store = new MongodbSession({
  uri: process.env.MONGODB_URL,
  collection: "session",
});

app.use(express.json());
app.use('/', routes)
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));
app.use(
  session({
    secret: "secret",
    store: store,
    saveUninitialized: false,
    resave: false,
    cookie: {
      sameSite: false,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 7, // one week
      httpOnly: true,
    },
  })
);

app.use((req, res, next) => {
  console.log(req.session);
  next();
});

