const router = require("express").Router();
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
const BannerController = require("../controllers/BannerController");

router.get("/", BannerController.getBanner)
router.use(authentication)
router.post("/", authorization, BannerController.addBanner)
router.put("/:id", authorization, BannerController.putBannerById)
router.delete("/:id", authorization, BannerController.deleteBannerById)

module.exports = router;
