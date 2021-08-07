const { Subject, validateSubject } = require("../models/subject");
const { Semester, validateSemester } = require("./../models/semester");

const getSemesters = async (req, res) => {
  try {
    const semesters = await Semester.find();
    res.send(semesters);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};

const createSemester = async (req, res) => {
  try {
    const { error } = validateSemester(req.body);
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

const addSubjectToSemester = async (req, res) => {
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
  addSubjectToSemester,
};
