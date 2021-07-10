const mongoose = require("mongoose");
const specialitySchema = require("./../models/speciality");
const Joi = require("joi");

const studentSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  specialities: {
    type: specialitySchema,
    required: true,
  },
});

const Student = new mongoose.model("Student", studentSchema);

function validateStudent(student) {
  const schema = Joi.object({
    firstname: Joi.string().min(5).max(255).required(),
    lastname: Joi.string().min(5).max(255).required(),
    email: Joi.string().min(5).max(255).email().required(),
  });

  return schema.validate(student);
}

exports.Student = Student;
exports.studentSchema = studentSchema;
exports.validate = validateStudent;
