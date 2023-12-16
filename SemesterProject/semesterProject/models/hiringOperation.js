const { use } = require("../routes/signUpRoute");
const hiringModel = require("./hiringModel")



async function newOrder (orderData,userCredentials){
    let order = new hiringModel()
    let userEmail = userCredentials.email;
    order.fullName = orderData.fullName;
    order.email = orderData.emailAddress;
    order.companyName = orderData.companyName;
    order.industry = orderData.industry;
    order.phoneNumber = orderData.phoneNumber;
    order.projectType = orderData.project;
    order.projectDescription = orderData.description;
    order.prefferedPlatform = orderData.preferredPlatform;
    order.ExtimatedBudget = orderData.extimatedBudget;
    order.timeLine = orderData.projectTimeline;
    order.additionalComments = orderData.additionalComments;
    order.loggedinUserEmail = userEmail;
    let savedOrder = await order.save()
    return savedOrder
}

async function userWithOrder(email){
    let user = await hiringModel.findOne({loggedinUserEmail:email})
    if(user){
        return true
    }
    else{
        return false
    }
}

async function allPendingOrders(){
    let orders = await hiringModel.find()
    return orders
}

module.exports.newOrder = newOrder
module.exports.userWithOrder= userWithOrder
module.exports.allPendingOrders = allPendingOrders