const express = require("express");
const router = express.Router();
const Department = require("../controllers/Department");

router.post("/", Department.createDepartment);
router.get("/", Department.getAllDepartment);
router.put("/:id", Department.editDepartment);
router.delete("/:id", Department.deleteDepartment);

module.exports = router;
