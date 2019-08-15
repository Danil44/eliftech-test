const express = require("express");
const morgan = require("morgan");
const router = require("./routes/router");
const mongoose = require("mongoose");
const { database, port, secret } = require("./config");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

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

if (process.env.NODE_ENV === "production") {
  app.use(expess.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
global.app = app;
