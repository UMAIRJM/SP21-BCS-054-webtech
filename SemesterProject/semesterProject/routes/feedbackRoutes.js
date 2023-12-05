
const express = require("express")

const router = express.Router();
const {newFeedback} = require("../models/operations")





router.post("/",async (req,res)=>{
    // res.render("login")
    console.log(req.body)
    let feedback = req.body.feedback
    await newFeedback(feedback)
    res.redirect("/main")
})


module.exports = router;
