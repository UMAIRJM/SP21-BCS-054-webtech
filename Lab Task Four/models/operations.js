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


async function findFeedbacks (pageNumber){
    const pNumber = pageNumber;
    const limit = 5;
    let feedbacks = await feedbackModel.find().skip((pNumber-1)*limit).limit(limit);
    
    // await feedbackModel.deleteMany({userEmail: { $exists: false }})
    return feedbacks
}

async function feedbackCount(){
    let feedbacksCount = await feedbackModel.countDocuments()
    return feedbacksCount
}

module.exports.newFeedback = newFeedback
module.exports.findFeedbacks = findFeedbacks
module.exports.feedbackCount = feedbackCount