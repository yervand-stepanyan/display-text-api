const router = require("express").Router();
const message = {message: "Hello World"};
const noRoute = "This endpoint is not configured yet! At this moment only \"/hello\" works!";

router.get("/", (req, res) => {
	res.send(noRoute);
});
router.get("/hello", (req, res) => {
	res.send(message);
});

module.exports = router;
