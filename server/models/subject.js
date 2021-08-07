const mongoose = require("mongoose");
const Joi = require("joi");

const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  numberOfHours: { type: String, required: true },
  coefficient: { type: String, required: true },
});

const Subject = new mongoose.model("Subject", subjectSchema);

function validateSubject(subject) {
  let schema = new Joi.object({
    name: Joi.string(),
    numberOfHours: Joi.string(),
    coefficient: Joi.string(),
  });
  return schema.validate(subject);
}

exports.subjectSchema = subjectSchema;
exports.Subject = Subject;
exports.validateSubject = validateSubject;
