const express = require("express");
const router = express.Router();

const contactController = require("../app/controller/ContactController");

router.get("/", contactController.create);
router.post("/", contactController.contact);

module.exports = router;
