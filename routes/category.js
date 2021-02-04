const router = require("express").Router();
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
const CategoryController = require("../controllers/CategoryController");

router.get("/", CategoryController.getCategory)
router.use(authentication)
router.post("/", authorization, CategoryController.addCategory)

module.exports = router;
