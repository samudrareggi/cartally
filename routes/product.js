const router = require("express").Router();
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
const ProductController = require("../controllers/ProductController");

router.get("/", ProductController.getProduct)
router.get("/:id", ProductController.getProductById)
router.use(authentication)
router.post("/", authorization, ProductController.addProduct)
router.put("/:id", authorization, ProductController.putProductById)
router.patch("/:id", authorization, ProductController.patchProductById)
router.delete("/:id", authorization, ProductController.deleteProductById)

module.exports = router;
