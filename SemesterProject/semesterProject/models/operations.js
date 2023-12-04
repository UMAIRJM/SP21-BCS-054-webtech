const feedbackModel = require("./feedbackModel")

const newFeedback =async (feedback)=>{
    let fm = new feedbackModel()
    fm.feedback = feedback
    await fm.save()
}

module.exports.newFeedback = newFeedback