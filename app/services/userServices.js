const UserModel = require('../model/user')



let Create = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const founduser = await UserModel.findOne({ student_id: data.student_id });
            if (founduser) {

                return reject("User ID already exits please create a new one.");
            }
            else {

                const user = new UserModel(data);
                const response = await user.save();
                // console.log(response); 
                if (response) {
                    return resolve("Data Added Successfully:" + response);
                }
                else {
                    return resolve("Data not added");
                }



            }



        } catch (error) {
            return reject(error);
        }
    })
}

let allusers = async (data) => {
    return new Promise(async (resolve, reject) => {

        try {

            const user = await UserModel.find();
            return resolve(user);
        }
        catch (err) {
            return reject(err);
        }
    });

}

let user_id = async (student_id) => {

    return new Promise(async (resolve, reject) => {
        try {

            const user = await UserModel.findOne({ student_id });
            console.log(user);
            if (user)
                return resolve(user);
            else
                return resolve(false);
        }
        catch (err) {
            return reject(err);
        }
    });


}

let deleteuser = async (student_id) => {

    return new Promise(async (resolve, reject) => {

        try {
            //delete data
            const data = await UserModel.findOneAndDelete({ student_id });

            if (data == 0) {
                return resolve(false);
            }
            else {
                return resolve("Student data deleted ID number: " + student_id);
            }
        }
        catch (err) {
            return reject(err);
        }
    })
}

module.exports = {
    Create: Create,
    allusers: allusers,
    user_id: user_id,
    deleteuser: deleteuser
}