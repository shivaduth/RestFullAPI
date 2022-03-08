const services = require('../services/userServices');
const { validationResult } = require("express-validator");

// create a student data
let Createuser = async (req, res) => {
    try {
        //store in error
        const { errors } = validationResult(req);

        if (errors.length > 0) {
            res.status(400).json({ errors });
        }
        const resdata = await services.Create(req.body);
        if (resdata)
            res.status(200).send(resdata);
    }
    catch (error) {
        // console.error(err);
        res.status(500).json({ error })
    }
}


// Read all data
let findAll = async (req, res) => {
    try {
        const result = await services.allusers();
        res.status(200).send(result);
    }
    catch (error) {
        res.status(404).json({ message: "Not found" });
    }
};

// Read specific data by student ID
let Findone = async (req, res) => {
    try {
        const resdata = await services.user_id(req.params.student_id);
        console.log(resdata);
        if (resdata)
            res.status(200).send(resdata);
        else
            res.status(404).json({message:"Data Not found"});
    }
    catch (error) {
        res.status(404).json({ message: "ID not found" });
    }
};
// Delete specific data by student ID
let deleteData = async (req, res) => {
    try {
        const resdata = await services.deleteuser(req.params.student_id);
        if (resdata)

            res.status(200).send(resdata);
        else

            res.status(404).json({ message:" ID Not Found"});
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Fails to delete" })

    }
}

module.exports = {
    Createuser: Createuser,
    findAll: findAll,
    Findone: Findone,
    deleteData: deleteData
}
