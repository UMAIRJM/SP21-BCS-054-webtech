
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

const authentication = async (email,password)=>{
    try{
    const user = await signUpModel.findOne({Email:email})
    if(user?.password == password){
        return true;
    }
    else{
        return false
    }
    
}catch(error){
    console.log("error finding user")
    console.log(error)
    return error
}
    
}

module.exports.newUser = newUser

module.exports.authentication = authentication