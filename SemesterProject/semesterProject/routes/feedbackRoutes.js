
const express = require("express")

const router = express.Router();
const {newFeedback,findFeedbacks} = require("../models/operations")





router.post("/",async (req,res)=>{
    // res.render("login")
    let url = req.headers.referer
    routeAddress= ""
    for(let i = url.length-1 ;i !== 0 ;i--){
        if(url[i] == "/"){
            break
        }
        else{
            routeAddress = routeAddress+url[i]
        }
        
    }
    newAddress = "/"
    let i = routeAddress.length - 1
    while (i>=0){
        newAddress = newAddress + routeAddress[i]
        i--  
    }
    let feedback = req.body.feedback
    validfeedback = await newFeedback(feedback)
    res.redirect(newAddress)
})

router.get("/",async (req,res)=>{
    let feedbacks =await findFeedbacks()
    res.render("feedbacks",{feedbacks})
})


module.exports = router;
