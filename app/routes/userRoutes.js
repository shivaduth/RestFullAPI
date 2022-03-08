const express = require('express');
const router = express.Router();

const usercontroller = require('../controller/userController');
const UserController = require('../controller/userController');
const studentValidation = require('../middleware/validator/student_feild');


router.post('/create-user', studentValidation,UserController.Createuser);
router.get('/allstudentdata', UserController.findAll);
router.get('/findone/:student_id',usercontroller.Findone);
router.delete('/delete/:student_id', UserController.deleteData);

module.exports = router;