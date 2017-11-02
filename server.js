"use strict";

const express = require("express"),
  passport = require("passport"),
  path = require("path"),
  cors = require("cors"),
  app = express(),
  authentication = require("./server/modules/authentication"),
  crypto = require("crypto"),
  cookieParser = require("cookie-parser"),
  session = require("express-session"),
  bodyParser = require("body-parser"),
  request = require("request"),
  db = require("./server/config/db.js"),
  env = require("./server/config/env"),
  router = require("./server/router/index"),
  fs = require("fs"),
  PORT = env.PORT;

app.use(cors());
app.use(
  session({
    secret: "cookie_secret",
    name: "cookie_name",
    proxy: true,
    resave: true,
    saveUninitialized: true
  })
);

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(authentication.localStrategy);
passport.serializeUser(authentication.serializeUser);
passport.deserializeUser(authentication.deserializeUser);

router(app, db);

app.use(express.static(path.join(__dirname, "public/")));
app.use(express.static(path.join(__dirname, "uploads/")));

app.get("/*", function(req, res, next) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(PORT);
console.log("serving template at http://localhost:8080");
