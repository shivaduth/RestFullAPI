const express = require('express');
const connectDB = require("./config/connectDB");
const swaggerUI=require("swagger-ui-express");
const swaggerJsDoc=require("swagger-jsdoc");


const app = express();

//connecting to db
connectDB();



app.use(express.json());
// app.use(express.urlencoded({ extended: true }))

require("./app/model/user");

const UserRoute = require('./app/routes/userRoutes');


const swaggerDocs = require('./OpenApiDocumentation/swagger.json');
 
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));

app.use('/user',UserRoute);


app.listen(3035, () => {
    console.log("Server is listening on port 3035");
});