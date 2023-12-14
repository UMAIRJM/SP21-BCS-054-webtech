const express = require("express")
const { route } = require("./signUpRoute")
const router = express.Router()


router.get("/",(req,res)=>{
    res.render("hireMe")
})

module.exports = router;