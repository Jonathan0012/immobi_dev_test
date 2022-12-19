const express = require("express");
const router = express.Router();
const Jabatan = require("../controllers/Jabatan")

router.post("/", Jabatan.createJabatan)
router.get("/", Jabatan.getAllJabatan)
router.put("/:id", Jabatan.editJabatan)
router.delete("/:id", Jabatan.deleteJabatan)

module.exports = router