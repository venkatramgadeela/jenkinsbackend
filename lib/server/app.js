"use strict";

var createError = require("http-errors");
var express = require("express");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
var jenkins = require("jenkins")({
  baseUrl: "http://thanush:Tango@123@localhost:8080",
  crumbIssuer: true,
  promisify: true
});

var jenkinsRouter = require("./routes/jenkins");

var app = express();

app.use(logger("dev"));
app.use(cors());

app.use(function (req, res, next) {
  next(createError(404));
});
app.use("/jenkins", jenkinsRouter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

module.exports = app;