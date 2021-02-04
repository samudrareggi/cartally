const router = require("express").Router()
const user = require("./user")
const authorization = require("../middlewares/authorization")
const UserController = require("../controllers/UserController");

router.post("/login", authorization, UserController.login)
router.use("/user", user)

module.exports = router