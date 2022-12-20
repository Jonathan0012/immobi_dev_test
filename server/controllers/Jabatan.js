const { table_jabatan } = require("../models");

class Jabatan {
    static async createJabatan(req,res){
        try {
            
        } catch (err) {
            
        }
    }

    static async getAllJabatan(req,res){
        try {
            const jabatan = await table_jabatan.findAll();
            res.status(200).json(jabatan)
        } catch (err) {
            console.log(err);
            res.status(500).json({message:"ISE"})
        }
    }

    static async editJabatan(req,res){
        try {
            
        } catch (err) {
            
        }
    }

    static async deleteJabatan(req,res){
        try {
            
        } catch (err) {
            
        }
    }
}

module.exports = Jabatan