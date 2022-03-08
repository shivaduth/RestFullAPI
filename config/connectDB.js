const mongoose = require("mongoose");
const { localhost, port } = require('./database.config');
const connectDB = () => {

    mongoose.connect(`mongodb://${localhost}:${port}`, {
        useNewUrlParser: true
    }).then(() => {
        console.log("Databse Connected Successfully!!");
    }).catch(err => {
        console.log('Could not connect to the database', err);
        process.exit();
    });
}
module.exports=connectDB;