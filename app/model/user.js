const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    
    student_id: {
        type: String,
        unique:true,
        required: true,
    },
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    student_std: {
        type: String,
        required: true,
    },
    student_fees:{
        type:String,
        required:true,
    },
    student_paid:{
        type:String,
        required:true,
    }
    
});


const user = new mongoose.model('user', schema);

module.exports = user;
