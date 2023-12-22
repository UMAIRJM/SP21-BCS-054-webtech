const express = require("express")
const { route } = require("./signUpRoute")
const router = express.Router()
const {newOrder,userWithOrder,userWithReceivedOrders} = require("../models/hiringOperation")

router.get("/",async(req,res)=>{
    let userCredentials = req.session.user
    let loggedinUserEmail =userCredentials.email
    let countOfOrders =await userWithReceivedOrders(loggedinUserEmail)
    let userWithOrderResponse = await userWithOrder(loggedinUserEmail)
    if(userWithOrderResponse){
        req.session.userWithOrder = true
    }
    else{
        req.session.userWithOrder = false
    }
    let userOrder = req.session.userWithOrder
    res.render("hireMe",{userOrder,countOfOrders})
})
router.post("/",async(req,res)=>{
    let userCredentials = req.session.user
    let savedOrder = await newOrder(req.body,userCredentials)
    console.log("saved order:",savedOrder)
    await userWithOrder(req.session.user.email)
    res.redirect(req.session.returnTo)
    
})

module.exports = router;