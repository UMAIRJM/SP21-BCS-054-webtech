const mongoose = require("mongoose")

const newOrderSchema = mongoose.Schema({
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


const newOrders = mongoose.model("order",newOrderSchema)

module.exports= newOrders;