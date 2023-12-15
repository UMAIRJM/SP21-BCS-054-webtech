const express = require("express")
const { route } = require("./signUpRoute")
const router = express.Router()
const {newOrder} = require("../models/hiringOperation")

router.get("/",(req,res)=>{
    res.render("hireMe")
})
router.post("/",async(req,res)=>{
    let savedOrder = await newOrder(req.body)
    console.log(savedOrder)
    res.redirect(req.session.returnTo)
    
})

module.exports = router;