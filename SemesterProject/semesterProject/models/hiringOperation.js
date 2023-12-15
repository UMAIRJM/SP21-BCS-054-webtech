const hiringModel = require("./hiringModel")



async function newOrder (orderData){
    let order = new hiringModel()
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
    let savedOrder = await order.save()
    return savedOrder
}

module.exports.newOrder = newOrder