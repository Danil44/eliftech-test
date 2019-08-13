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
  .use("/", router);

app.listen(process.env.PORT || port);

global.app = app;
