const { Student, validateStudent } = require("../models/student");
const { School, validateSchool } = require("./../models/school");
const { Speciality, validateSpeciality } = require("./../models/speciality");
const { Employee, validateEmployee } = require("./../models/employee");

const getSchools = async (req, res) => {
  try {
    const school = await School.find();
    res.send(school);
  } catch (error) {
    res.status(500).send("Something went wrong!");
  }
};

const createSchool = async (req, res) => {
  try {
    const { error } = validateSchool(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let newSchool = new School({
      name: req.body.name,
      phone: req.body.phone,
      dateFounded: req.body.dateFounded,
      director: req.body.director,
      logo: req.body.logo,
      website: req.body.website,
      specialities: req.body.specialities,
      students: req.body.students,
      employess: req.body.employess,
    });
    console.log(newSchool);
    await newSchool.save();
    res.send(newSchool);
  } catch (error) {
    res.status(500).send("Something went wrong");
    console.log(error);
  }
};

const addStudentToSchool = async (req, res) => {
  try {
    const { error } = validateStudent(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const school = await School.findById(req.params.id);

    let newStudent = new Student({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
    });
    school.students.push(newStudent);
    await school.save();
    res.send(school);
  } catch (error) {
    res.status(500).send("Something went wrong");
    console.log(error);
  }
};

const addSpecialityToSchool = async (req, res) => {
  try {
    const { error } = validateStudent(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const school = await School.findById(req.params.id);

    let newSpeciality = new Speciality({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
    });
    school.specialities.push(newSpeciality);
    await school.save();
    res.send(school);
  } catch (error) {
    res.status(500).send("Something went wrong");
    console.log(error);
  }
};

const addEmployeeToSchool = async (req, res) => {
  try {
    const { error } = validateEmployee(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const school = await School.findById(req.params.id);

    let newEmployee = new Employee({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
    });
    school.employees.push(newEmployee);
    await school.save();
    res.send(school);
  } catch (error) {
    res.status(500).send("Something went wrong");
    console.log(error);
  }
};

module.exports = {
  getSchools,
  createSchool,
  addSpecialityToSchool,
  addStudentToSchool,
  addEmployeeToSchool,
};
