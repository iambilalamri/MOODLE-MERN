const { Speciality, validateSpeciality } = require("./../models/speciality");
const { Semester, validateSemester } = require("./../models/semester");

const getSpecialities = async (req, res) => {
  try {
    const specialities = await Speciality.find();
    res.send(specialities);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};

const createSpeciality = async (req, res) => {
  try {
    const { error } = validateSpeciality(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    let newSpeciality = new Speciality({
      name: req.body.name,
      description: req.body.description,
    });

    await newSpeciality.save();
    res.send(newSpeciality);
  } catch (error) {
    res.status(500).send("Something went wrong");
    console.log(error);
  }
};

const addSemesterToSpeciality = async (req, res) => {
  try {
    const { error } = validateSemester(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const speciality = await Speciality.findById(req.params.id);
    const newSemester = new Semester({
      name: req.body.name,
      description: req.body.description,
      subjects: req.body.subjects,
    });
    speciality.semester.push(newSemester);
    await speciality.save();
    res.send(semester);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getSpecialities,
  createSpeciality,
  addSemesterToSpeciality,
};
