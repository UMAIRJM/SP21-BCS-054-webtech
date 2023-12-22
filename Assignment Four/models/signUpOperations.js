
const signUpModel = require("./signUpModel")
const bcrypt = require("bcrypt")
async function newUser  (firstName,secondName,phoneNumber,Email,password){
    console.log("Creating User")
    let user = new signUpModel();
    user.firstName = firstName;
    user.secondName = secondName;
    user.phoneNumber = phoneNumber;
    user.Email = Email;
    user.password = password;
    const userWithSameEmail = await signUpModel.findOne({Email:Email})
    if(userWithSameEmail){
        console.log("user with same email already exists")
        return false
    }else{
        await user.save();
        console.log("User created in databasde sucessfully")
        return true


    }
    
}

const authentication = async (email,password)=>{
    try{
    const user = await signUpModel.findOne({Email:email})
    if(user){
        passordCheck = decryptingThePassword(user?.password,password)
        if(passordCheck){
            return {
                auth:true,
                userName: user.firstName
            }
        }
        else{
            return {
                auth:false,
                userName:"null"
            }
        }
        
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
function decryptingThePassword(StoredPassword,enteredPassword){
    const passwordMatch = bcrypt.compareSync(enteredPassword,StoredPassword)
    return passwordMatch

}


module.exports.newUser = newUser

module.exports.authentication = authentication