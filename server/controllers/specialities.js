const { Speciality, validate } = require("./../models/speciality");

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
    const { error } = validate(req.body);
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

module.exports = {
  getSpecialities,
  createSpeciality,
};
