const router = require("express").Router();
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

router.post("/register", UserController.register);

module.exports = router;
