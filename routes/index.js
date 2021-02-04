const router = require("express").Router()
const authorization = require("../middlewares/authorization")
const UserController = require("../controllers/UserController");
const user = require("./user")
const product = require("./product")
const cart = require("./cart")
const banner = require("./banner")
const category = require("./category")

router.post("/login", authorization, UserController.login)
router.use("/user", user)
router.use("/products", product)
router.use("/carts", cart)
router.use("/banners", banner)
router.use("/categories", category)

module.exports = router