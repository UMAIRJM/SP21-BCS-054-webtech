
const express = require("express");
const router = express.Router();
const {newUser,authentication} = require("../models/signUpOperations")
const bcrypt = require("bcrypt")



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
    encryptedPassword = encryptingThePassword(password)
    results =  await newUser(firstname,lastname,phoneNUmber,email,encryptedPassword)
    if(results){
        console.log("I am in if",results)
        res.render("signInScreen",{notheaderFooterPage:true})
    }
    else{
        console.log("I am in else" + results)
        res.render("signUpScreen",{notheaderFooterPage:true,error:"User With this email Already exists"})
    }
    

    
})



function encryptingThePassword(password){
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds)
    const encryptedPassword = bcrypt.hashSync(password,salt)

    return encryptedPassword
}

module.exports = router;
