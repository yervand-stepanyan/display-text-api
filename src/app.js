const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const Api = require("./api");

app.use(morgan("dev"));

app.use(cors({
	origin: "*",
	methods: ["GET"],
	allowedHeaders: ["Content-Type"],
	credentials: true,
	optionsSuccessStatus: 200,
	maxAge: -1
}));

app.use("/", Api);

module.exports = app;
