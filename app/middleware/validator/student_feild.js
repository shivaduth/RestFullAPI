const { body } = require("express-validator");
const studentValidation = [
    body("student_id").isString().withMessage("invalid student id"),
    body("firstName").isString().withMessage("required first name"),
    body("lastName").isString().withMessage("required last name"),
    body("student_std").isNumeric().withMessage("required std name"),
    body("student_fees").isNumeric().withMessage("required fees "),
    body("student_paid").isNumeric().withMessage("required paid fees")
]

module.exports=studentValidation;
