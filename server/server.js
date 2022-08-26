require("dotenv").config();
const express = require('express')
const app = express()
const cors = require('cors')
const session = require("express-session");
const MongodbSession = require("connect-mongodb-session")(session);
const mongoose = require("mongoose");
const routes = require('./routes/routes')



app.use('/', routes)