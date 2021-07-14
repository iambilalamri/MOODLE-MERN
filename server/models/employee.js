const mongoose = require("mongoose");
const Joi = require("joi");

const employeeSchema = mongoose.Schema({
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

const Employee = new mongoose.model("Employee", employeeSchema);

function validateEmployee(employee) {
  const schema = Joi.object({
    firstname: Joi.string().min(5).max(255),
    lastname: Joi.string().min(5).max(255),
    email: Joi.string().min(5).max(255).email(),
  });

  return schema.validate(employee);
}

exports.Employee = Employee;
exports.employeeSchema = employeeSchema;
exports.validateEmployee = validateEmployee;
