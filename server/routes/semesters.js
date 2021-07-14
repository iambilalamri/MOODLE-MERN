const express = require("express");
const {
  getSemesters,
  addSubjectToSemester,
  createSemester,
} = require("../controllers/semesters");

const router = express.Router();

router.get("/", getSemesters);
router.post("/", createSemester);
router.post("/:id/subject", addSubjectToSemester);

module.exports = router;
