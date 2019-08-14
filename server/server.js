const express = require("express");
const morgan = require("morgan");
const router = require("./routes/router");
const mongoose = require("mongoose");
const { database, port, secret } = require("./config");
const bodyParser = require("body-parser");
const app = express();

mongoose.connect(database, { useNewUrlParser: true }, () =>
  console.log(":::connected to db:::")
);

app
  .set("superSecret", secret)
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(morgan("dev"))
  .use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, POST, GET, DELETE, OPTIONS"
    );
    next();
  })
  .use("/", router);

app.listen(process.env.PORT || port);

global.app = app;
