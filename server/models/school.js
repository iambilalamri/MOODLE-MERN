const mongoose = require("mongoose");
const Joi = require("joi");

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: AddressSchema,
    required: true,
  },
  students: [
    {
      type: studentSchema,
      required: true,
    },
  ],
  dateFounded: {
    type: Date,
    required: true,
  },
  scolariteMembers: [
    {
      type: scolariteMemberSchema,
      required: true,
    },
  ],
  director: {
    type: String,
    required: true,
  },
  teachers: [
    {
      type: teacherSchema,
      required: true,
    },
  ],
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
});

const School = mongoose.model("School", schoolSchema);

function validateSchool(school) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50),
    address: Joi.object(),
    students: Joi.array(),
    dateFounded: Joi.date(),
    scolariteMembers: Joi.array(),
    director: Joi.string(),
    teachers: Joi.array(),
    logo: Joi.string(),
    website: Joi.string(),
    specialitySchema: Joi.array(),
  });

  return schema.validate(school);
}

exports.School = School;
exports.schoolSchema = schoolSchema;
exports.validate = validateSchool;
