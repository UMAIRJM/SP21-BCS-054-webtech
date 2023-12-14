const feedbackModel = require("./feedbackModel")

async function newFeedback  (feedback,userCredentials){
    if(feedback !==null){
        let fm = new feedbackModel()
        
        fm.userName = userCredentials.userName;
        fm.userEmail = userCredentials.email;
        fm.feedback = feedback
        await fm.save()
        return true
    }else{
        return false
    }
    
}

const findFeedbacks = async()=>{
    let feedbacks = await feedbackModel.find()
    // await feedbackModel.deleteMany({userEmail: { $exists: false }})
    return feedbacks
}

module.exports.newFeedback = newFeedback
module.exports.findFeedbacks = findFeedbacks