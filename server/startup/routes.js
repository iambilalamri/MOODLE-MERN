const cors = require("cors");
const express = require("express");

const cookieParser = require("cookie-parser");

const schools = require("./../routes/schools");
const address = require("./../routes/address");
const scolarityMembers = require("./../routes/scolarityMembers");
const semesters = require("./../routes/semesters");
const specialities = require("./../routes/specialities");
const students = require("./../routes/students");
const teachers = require("./../routes/teachers");

function routes(app) {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  app.use("/api/students", students);
  /**
  app.use("/api/schools", schools);
  app.use("/api/address", address);
  app.use("/api/scorityMembers", scolarityMembers);
  app.use("/api/semesters", semesters);
  app.use("/api/specialities", specialities);
  app.use("/api/students", students);
  app.use("/api/teachers", teachers);
  */
}

module.exports = { routes };
