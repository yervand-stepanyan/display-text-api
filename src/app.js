const express = require("express");
const app = express();
const Api = require("./api");

app.use("/", Api);

module.exports = app;
