const router = require("express").Router()
const user = require("./user")
const product = require("./product")
const cart = require("./cart")
const banner = require("./banner")
const authorization = require("../middlewares/authorization")
const UserController = require("../controllers/UserController");

router.post("/login", authorization, UserController.login)
router.use("/user", user)
router.use("/products", product)
router.use("/carts", cart)
router.use("/banners", banner)

module.exports = router