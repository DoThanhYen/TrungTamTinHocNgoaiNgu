const express = require("express");
const router = express.Router();

const newController = require("../app/controller/NewController");

router.get("/", newController.show);

module.exports = router;
