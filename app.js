require("dotenv").config();
require("./database/connect");

const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const expressSession = require("express-session");
const MongoStore = require('connect-mongo')(expressSession);
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();

app.engine("handlebars", exphbs({ 
  extname: "handlebars",
  defaultLayout: "main",
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: [
    //  path to your partials
    __dirname + '/views/partials',
  ]
}));
app.set("view engine", "handlebars");

app.use(expressSession({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
      expires: 600000
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(methodOverride('_method', { methods: ['POST', 'GET']}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const passport = require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));

app.use(require("./routes"));

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));