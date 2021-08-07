const mongoose = require("mongoose");
const Joi = require("joi");
const { studentSchema } = require("./student");
const { specialitySchema } = require("./speciality");
const { employeeSchema } = require("./employee");

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  dateFounded: {
    type: Date,
    default: Date.now(),
  },
  director: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  specialities: [
    {
      type: specialitySchema,
      required: true,
    },
  ],
  students: [
    {
      type: studentSchema,
      required: true,
    },
  ],
  employees: [
    {
      type: employeeSchema,
      required: true,
    },
  ],
});

const School = new mongoose.model("School", schoolSchema);

function validateSchool(school) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50),
    phone: Joi.string().min(5).max(50),
    dateFounded: Joi.date(),
    director: Joi.string(),
    logo: Joi.string(),
    website: Joi.string(),
    specialities: Joi.array(),
    students: Joi.array(),
    employees: Joi.array(),
  });

  return schema.validate(school);
}

exports.School = School;
exports.schoolSchema = schoolSchema;
exports.validateSchool = validateSchool;
