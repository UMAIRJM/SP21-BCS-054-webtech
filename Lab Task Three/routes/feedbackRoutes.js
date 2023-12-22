
const express = require("express")

const router = express.Router();
const {newFeedback,findFeedbacks,feedbackCount} = require("../models/operations")





router.post("/",async (req,res)=>{
    // res.render("login")
    let feedback = req.body.feedback
    let userCredentials = req.session.user
    console.log(userCredentials)
    validfeedback = await newFeedback(feedback,userCredentials)
    res.redirect(req.session.returnTo);
})

router.get("/",async (req,res)=>{
    let counter = await feedbackCount()
    let feedbacks =await findFeedbacks(1)
    let pages = counter/5
    pages = Math.ceil(pages)
    console.log(pages)
    res.render("feedbacks",{feedbacks,pages})
})

router.get("/:pageNumber",async (req,res)=>{
    const pageNumber = req.params.pageNumber
    let counter = await feedbackCount()
    let pages = counter/5
    pages = Math.ceil(pages)
    let feedbacks = await findFeedbacks(pageNumber)
    res.render("feedbacks",{feedbacks,pages})
})

module.exports = router;











// Only  for coding Practice

// router.post("/",async (req,res)=>{
//     // res.render("login")
//     let url = req.headers.referer
//     routeAddress= ""
//     for(let i = url.length-1 ;i !== 0 ;i--){
//         if(url[i] == "/"){
//             break
//         }
//         else{
//             routeAddress = routeAddress+url[i]
//         }
        
//     }
//     newAddress = "/"
//     let i = routeAddress.length - 1
//     while (i>=0){
//         newAddress = newAddress + routeAddress[i]
//         i--  
//     }
//     let feedback = req.body.feedback
    
//     let userCredentials = req.session.user
//     console.log(userCredentials)
//     validfeedback = await newFeedback(feedback,userCredentials)
//     // res.redirect(newAddress)
//     res.redirect(req.session.returnTo);
// })