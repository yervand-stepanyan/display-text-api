const express = require("express");
const app = express();
const message = {message: "Hello World"};

app.get("/hello", (req, res) => {
	res.send(message);
});

module.exports = app;
