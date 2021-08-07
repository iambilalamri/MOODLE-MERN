const { Subject, validateSubject } = require("./../models/subject");

const getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.send(subjects);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};

const createSubject = async (req, res) => {
  try {
    const { error } = validateSubject(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    let newSubject = new Subject({
      name: req.body.name,
      numberOfHours: req.body.numberOfHours,
      coefficient: req.body.coefficient,
    });
    console.log(newSubject);
    await newSubject.save();
    res.send(newSubject);
  } catch (error) {
    res.status(500).send("Something went wrong");
    console.log(error);
  }
};

module.exports = {
  getSubjects,
  createSubject,
};
