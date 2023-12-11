const feedbackModel = require("./feedbackModel")

async function newFeedback  (feedback){
    if(feedback !==null){
        let fm = new feedbackModel()
        fm.feedback = feedback
        await fm.save()
        return true
    }else{
        return false
    }
    
}

const findFeedbacks = async()=>{
    let feedbacks = await feedbackModel.find()
    return feedbacks
}

module.exports.newFeedback = newFeedback
module.exports.findFeedbacks = findFeedbacks