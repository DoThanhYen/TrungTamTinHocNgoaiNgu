const express = require("express");
const router = express.Router();

const siteController = require("../app/controller/SiteController");
router.get("/payinstruction", siteController.payinstruction);
router.get("/contact", siteController.contact);
router.get("/", siteController.home);

module.exports = router;
