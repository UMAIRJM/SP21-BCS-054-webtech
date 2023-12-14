const mongoose = require("mongoose")

const feedbackSchema = mongoose.Schema({
    userName:String,
    userEmail:String,
    feedback : {type:String,required:true},

})

const feedbackModel = mongoose.model("feedback",feedbackSchema)
module.exports = feedbackModel