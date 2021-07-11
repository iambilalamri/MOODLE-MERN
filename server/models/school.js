const mongoose = require("mongoose");
const Joi = require("joi");

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
  });

  return schema.validate(school);
}

exports.School = School;
exports.schoolSchema = schoolSchema;
exports.validate = validateSchool;
