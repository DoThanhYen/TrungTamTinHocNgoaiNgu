const express = require("express");
const router = express.Router();

const courseController = require("../app/controller/CourseController");

router.get("/register/:class", courseController.register);

router.put("/:class", courseController.registers);

router.get("/:class/registerSuccess", courseController.registerSuccess);

//router.get("/", courseController.courses);

module.exports = router;
