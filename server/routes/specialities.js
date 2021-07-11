const express = require("express");
const {
  getSpecialities,
  createSpeciality,
} = require("../controllers/specialities");

const router = express.Router();

router.get(getSpecialities);
router.post("", createSpeciality);

module.exports = router;
