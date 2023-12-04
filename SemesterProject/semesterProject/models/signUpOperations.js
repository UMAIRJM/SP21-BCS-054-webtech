
const signUpModel = require("./signUpModel")

const newUser =async (firstName,secondName,phoneNumber,Email,password)=>{
    console.log("Creating User")
    let user = new signUpModel();
    user.firstName = firstName;
    user.secondName = secondName;
    user.phoneNumber = phoneNumber;
    user.Email = Email;
    user.password = password;

    await user.save();
    console.log("User created in databasde sucessfully")
}

module.exports.newUser = newUser
