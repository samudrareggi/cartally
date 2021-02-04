const router = require("express").Router();
const authentication = require("../middlewares/authentication");
const userAuth = require("../middlewares/userAuth");
const CartController = require("../controllers/CartController");

router.use(authentication);
router.get("/", CartController.getCart);
router.post("/", CartController.addCart);
router.patch("/:id", userAuth, CartController.updateAmount);
router.delete("/:id", userAuth, CartController.deleteCart);

module.exports = router;
