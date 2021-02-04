const router = require("express").Router();
const authentication = require("../middlewares/authentication");
const userAuth = require("../middlewares/userAuth");
const UserController = require("../controllers/UserController");

router.post("/login", UserController.login)
router.post("/register", UserController.register);

module.exports = router;
