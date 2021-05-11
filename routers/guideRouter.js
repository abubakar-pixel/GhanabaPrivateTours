const router = require("express").Router();
const guideController = require("../controllers/guideController");
const { verifyGuideToken } = require("../controllers/guideAuthController");

router.get("/", guideController.getAllGuides);
router.get("/:id", verifyGuideToken, guideController.getSingleGuide);
router.patch("/:id", guideController.updateGuide);
router.delete("/:id", guideController.deleteGuide);

module.exports = router;
