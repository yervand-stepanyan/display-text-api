const app = require("express")();
const hello = require("./hello/hello.api");

app.use("/",hello);

module.exports = app;
