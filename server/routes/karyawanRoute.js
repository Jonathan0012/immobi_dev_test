const express = require("express");
const router = express.Router();
const Karyawan = require("../controllers/Karyawan")

router.post("/", Karyawan.createKaryawan)
router.get("/", Karyawan.getAllKaryawan)
router.get("/:id", Karyawan.getKaryawanById)
router.put("/:id", Karyawan.editKaryawan)
router.delete("/:id", Karyawan.deleteKaryawan)

module.exports = router