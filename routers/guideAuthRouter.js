const express = require("express");
const router = express.Router();
const {
  guideRegister,
  guideLogin,
} = require("../controllers/guideAuthController");

router.post("/guideRegister", guideRegister);
router.post("/guideLogin", guideLogin);

module.exports = router;
