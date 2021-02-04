const router = require("express").Router()
const user = require("./user")
const product = require("./product")
const cart = require("./cart")
const authorization = require("../middlewares/authorization")
const UserController = require("../controllers/UserController");

router.post("/login", authorization, UserController.login)
router.use("/user", user)
router.use("/products", product)
router.use("/carts", cart)

module.exports = router