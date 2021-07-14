const express = require("express");
const {
  getSpecialities,
  createSpeciality,
  addSemesterToSpeciality,
} = require("../controllers/specialities");

const router = express.Router();

router.get("/", getSpecialities);
router.post("/", createSpeciality);
router.post("/:id/semester", addSemesterToSpeciality);

module.exports = router;
