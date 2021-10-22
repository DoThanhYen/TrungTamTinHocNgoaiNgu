const express = require("express");
const router = express.Router();

const subjectController = require("../app/controller/SubjectController");

router.get("/", subjectController.subject);

router.get("/:_id", subjectController.show);

module.exports = router;
