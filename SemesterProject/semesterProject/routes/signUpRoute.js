
const express = require("express");
const router = express.Router();
const {newUser,authentication} = require("../models/signUpOperations")




router.get("/",(req,res)=>{
    res.render("signUpScreen",{notheaderFooterPage:true})

})
router.post("/",async (req,res)=>{
    let data = req.body
    let firstname = data.firstName
    let lastname = data.secondName
    let phoneNUmber  = data.phoneNumber
    let email= data.emailAddress
    let password = data.passwordField
    await newUser(firstname,lastname,phoneNUmber,email,password)
    res.render("signInScreen",{notheaderFooterPage:true})


    
})

module.exports = router;
