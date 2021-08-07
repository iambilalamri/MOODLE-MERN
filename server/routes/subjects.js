const express = require("express");
const { getSubjects, createSubject } = require("../controllers/subjects");

const router = express.Router();

router.get("/", getSubjects);
router.post("/", createSubject);

module.exports = router;
