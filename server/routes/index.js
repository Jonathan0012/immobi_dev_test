const express = require('express');
const index = express.Router();

const karyawanRoute = require("./karyawanRoute")
const jabatanRoute = require("./jabatanRoute")
const departmentRoute = require("./departmentRoute")

index.use("/karyawan",karyawanRoute )
index.use("/jabatan",jabatanRoute )
index.use("/department",departmentRoute )

module.exports = index;