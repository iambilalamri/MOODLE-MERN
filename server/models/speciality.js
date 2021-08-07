const mongoose = require("mongoose");
const Joi = require("joi");
const { semesterSchema } = require("./semester");

const specialitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  semesters: [
    {
      type: semesterSchema,
      required: true,
    },
  ],
});

const Speciality = new mongoose.model("Speciality", specialitySchema);

function validateSpeciality(speciality) {
  const schema = new Joi.object({
    name: Joi.string().min(5),
    description: Joi.string().min(10),
    semesters: Joi.array(),
  });

  return schema.validate(speciality);
}

exports.specialitySchema = specialitySchema;
exports.Speciality = Speciality;
exports.validateSpeciality = validateSpeciality;
