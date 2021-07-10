const mongoose = require("mongoose");
const Joi = require("joi");

const specialitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  M,
});

const Speciality = new mongoose.model("Speciality", specialitySchema);

function validateSpeciality(speciality) {}

exports.specialitySchema = specialitySchema;
exports.Speciality = Speciality;
exports.validate = validateSpeciality;
