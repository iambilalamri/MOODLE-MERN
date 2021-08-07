const Joi = require("joi");
const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  numero: {
    type: String,
    required: true,
  },
  voie: {
    type: String,
    required: false,
  },
  rue: {
    type: String,
    required: true,
  },
  codePostale: {
    type: String,
    required: true,
  },
  ville: {
    type: String,
    required: true,
  },
});

const Address = new mongoose.model("Address", addressSchema);

function validateAddress(address) {
  const schema = new Joi.object({
    numero: Joi.string().required(),
    voie: Joi.string().required(),
    rue: Joi.string().required(),
    codePostale: Joi.string().required(),
    ville: Joi.string().required(),
  });
  return schema.validate(address);
}

exports.addressSchema = addressSchema;
exports.Address = Address;
exports.validateAddress = validateAddress;
