const { Student, validate } = require("../models/student.js");

const getStudents = async (req, res) => {
  try {
    const student = await Student.find();
    res.send(student);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};

const createStudent = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    let student = new Student({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
    });
    await student.save();
    res.send(student);
  } catch (error) {
    res.status(500).send("Something went wrong");
    console.log(error);
  }
};

module.exports = {
  getStudents,
  createStudent,
};
