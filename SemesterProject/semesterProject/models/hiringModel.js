const mongoose = require("mongoose")

const hiringSchema = mongoose.Schema({
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


const hiringModel = mongoose.model("pendingModel",hiringSchema)

module.exports= hiringModel;