const express = require("express");
const {
  getSemesters,
  addSubject,
  createSemester,
} = require("../controllers/semesters");

const router = express.Router();

router.get("/", getSemesters);
router.post("/", createSemester);
router.post("/:id/subject", addSubject);

module.exports = router;
