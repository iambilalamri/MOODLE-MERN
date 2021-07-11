const { Subject, validateSubject } = require("../models/subject");
const { Semester, validate } = require("./../models/semester");

const getSemesters = async (req, res) => {
  try {
  } catch (error) {}
};

const createSemester = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let newSemester = new Semester({
      name: req.body.name,
      subjects: req.body.subjects,
    });
    await newSemester.save();
    res.send(newSemester);
  } catch (error) {
    console.log(error);
  }
};

const addSubject = async (req, res) => {
  try {
    const { error } = validateSubject(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const semester = await Semester.findById(req.params.id);
    const newSubject = new Subject({
      name: req.body.name,
      numberOfHours: req.body.numberOfHours,
      coefficient: req.body.coefficient,
    });
    semester.subjects.push(newSubject);
    await semester.save();
    res.send(semester);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createSemester,
  getSemesters,
  addSubject,
};
