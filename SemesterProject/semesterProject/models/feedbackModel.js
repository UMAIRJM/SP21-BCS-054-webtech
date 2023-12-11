const mongoose = require("mongoose")

const feedbackSchema = mongoose.Schema({
    feedback : {type:String,required:true},

})

const feedbackModel = mongoose.model("feedback",feedbackSchema)
module.exports = feedbackModel