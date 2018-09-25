const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const jenkinsConfig = require("./config/jenkinsConfig");

require("dotenv").config();

const jenkinsRouter = require("./routes/jenkins");
const userRouter = require("./routes/users");

const app = express();
app.use(logger("dev"));
app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(cookieParser());
app.use("/jenkins", jenkinsRouter);
app.use("/users", userRouter);
app.use((req, res, next) => {
  next(createError(404));
});
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err
  });
});
module.exports = app;
