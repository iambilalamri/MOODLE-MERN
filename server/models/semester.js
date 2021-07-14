const mongoose = require("mongoose");
const Joi = require("joi");
const { subjectSchema } = require("./../models/subject");

const semesterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isInternship: {
    type: Boolean,
    default: false,
    required: true,
  },
  subjects: [
    {
      type: subjectSchema,
    },
  ],
});

const Semester = new mongoose.model("Semester", semesterSchema);

function validateSemester(semester) {
  const schema = new Joi.object({
    name: Joi.string(),
    isInternship: Joi.boolean(),
    subjects: Joi.array().min(2).max(8),
  });
  return schema.validate(semester);
}

exports.semesterSchema = semesterSchema;
exports.Semester = Semester;
exports.validateSemester = validateSemester;
