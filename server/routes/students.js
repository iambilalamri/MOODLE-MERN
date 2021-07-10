const express = require("express");
const { getStudents, createStudent } = require("../controllers/students");

const router = express.Router();

router.get("/", getStudents);
router.post("/", createStudent);

module.exports = router;
