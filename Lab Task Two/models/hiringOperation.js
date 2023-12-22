const { use } = require("../routes/signUpRoute");
const hiringModel = require("./hiringModel")
const newOrders = require("./newOrderModel")
const rejectedModel = require("./rejectedOrdersModel")



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


async function receiveingTheOrder(email){
    let receivedOrder = await hiringModel.findOneAndDelete({loggedinUserEmail:email})
    let creatingOrder = new newOrders()
    creatingOrder.fullName =receivedOrder.fullName;
    creatingOrder.email = receivedOrder.email;
    creatingOrder.companyName=receivedOrder.companyName;
    creatingOrder.industry=receivedOrder.industry;
    creatingOrder.phoneNumber=receivedOrder.phoneNumber;
    creatingOrder.projectType=receivedOrder.projectType;
    creatingOrder.projectDescription=receivedOrder.projectDescription;
    creatingOrder.prefferedPlatform=receivedOrder.preferredPlatform;
    creatingOrder.ExtimatedBudget=receivedOrder.ExtimatedBudget;
    creatingOrder.timeLine=receivedOrder.timeLine;
    creatingOrder.additionalComments=receivedOrder.additionalComments;
    creatingOrder.loggedinUserEmail=receivedOrder.loggedinUserEmail;
    let createdOrder= await creatingOrder.save()
    return createdOrder
}

async function orders(){
    let orders = await newOrders.find()
    return orders
}

async function userWithReceivedOrders(email){
    let userReceivedOrders = await newOrders.countDocuments({loggedinUserEmail:email});
   return userReceivedOrders;
}

async function rejectedOrders(email){
    let receivedOrder = await hiringModel.findOneAndDelete({loggedinUserEmail:email})
    let creatingOrder = new rejectedModel()
    creatingOrder.fullName =receivedOrder.fullName;
    creatingOrder.email = receivedOrder.email;
    creatingOrder.companyName=receivedOrder.companyName;
    creatingOrder.industry=receivedOrder.industry;
    creatingOrder.phoneNumber=receivedOrder.phoneNumber;
    creatingOrder.projectType=receivedOrder.projectType;
    creatingOrder.projectDescription=receivedOrder.projectDescription;
    creatingOrder.prefferedPlatform=receivedOrder.preferredPlatform;
    creatingOrder.ExtimatedBudget=receivedOrder.ExtimatedBudget;
    creatingOrder.timeLine=receivedOrder.timeLine;
    creatingOrder.additionalComments=receivedOrder.additionalComments;
    creatingOrder.loggedinUserEmail=receivedOrder.loggedinUserEmail;
    let createdOrder= await creatingOrder.save()

    return createdOrder
}




module.exports.newOrder = newOrder
module.exports.userWithOrder= userWithOrder
module.exports.allPendingOrders = allPendingOrders
module.exports.receiveingTheOrder = receiveingTheOrder
module.exports.orders= orders
module.exports.userWithReceivedOrders =userWithReceivedOrders
module.exports.rejectedOrders = rejectedOrders