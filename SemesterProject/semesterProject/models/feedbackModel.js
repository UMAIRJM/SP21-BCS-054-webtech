const mongoose = require("mongoose")

const feedbackSchema = mongoose.Schema({
    feedback : String,
})


const feedbackModel = mongoose.model("feedback",feedbackSchema)
module.exports = feedbackModel