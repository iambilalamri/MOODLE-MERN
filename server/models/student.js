const mongoose = require("mongoose");
const { specialitySchema } = require("./../models/speciality");
const Joi = require("joi");
const { schoolSchema } = require("./../models/school");

const studentSchema = mongoose.Schema({
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
});

const Student = new mongoose.model("Student", studentSchema);

function validateStudent(student) {
  const schema = Joi.object({
    firstname: Joi.string().min(5).max(255),
    lastname: Joi.string().min(5).max(255),
    email: Joi.string().min(5).max(255).email(),
  });

  return schema.validate(student);
}

exports.Student = Student;
exports.studentSchema = studentSchema;
exports.validate = validateStudent;
