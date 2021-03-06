const cors = require("cors");
const express = require("express");

const cookieParser = require("cookie-parser");

const schools = require("./../routes/schools");
const employees = require("./../routes/employees");
const semesters = require("./../routes/semesters");
const specialities = require("./../routes/specialities");
const students = require("./../routes/students");
const subjects = require("../routes/subjects");

function routes(app) {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  app.use("/api/school", schools);
  app.use("/api/subjects", subjects);
  app.use("/api/semesters", semesters);
  app.use("/api/specialities", specialities);
  app.use("/api/students", students);
  app.use("/api/employees", employees);
  /**
  app.use("/api/address", address);
  */
}

module.exports = { routes };
