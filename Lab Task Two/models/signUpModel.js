const mongoose = require("mongoose")

const signUpSchema = mongoose.Schema({
    firstName:String,
    secondName:String,
    phoneNumber:String,
    Email:String,
    password:String,
})


const signUpModel = mongoose.model("User",signUpSchema)

module.exports = signUpModel
