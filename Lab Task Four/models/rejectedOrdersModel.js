const mongoose = require("mongoose")

const rejectedSchema = mongoose.Schema({
    fullName : String,
    email:String,
    companyName:String,
    industry:String,
    phoneNumber:String,
    projectType:String,
    projectDescription:String,
    prefferedPlatform:String,
    ExtimatedBudget:String,
    timeLine:String,
    additionalComments:String,
    loggedinUserEmail:String

})


const rejectedModel = mongoose.model("rejectedOrder",rejectedSchema)

module.exports= rejectedModel;