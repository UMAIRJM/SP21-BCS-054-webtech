
const express = require("express")
const router = express.Router();
const {newUser,authentication} = require("../models/signUpOperations")
// const bodyParser = require("body-parser")
// const app = express()
// const expressLayouts = require("express-ejs-layouts")
// app.set("layout","./layouts/mainLayout")
// app.use(expressLayouts)
// app.use(express.static("public"))
// app.set("view engine","ejs")
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}))




router.post("/",async (req,res)=>{
    console.log(req.body)

    let auth = await authentication(req.body.email,req.body.password)
    if(auth == true){
        req.session.isAuthenticated = true
        res.redirect("/main")
    }
    else{
        res.redirect("/login")
    }

})



router.get("/",(req,res)=>{
    res.render("signInScreen",{notheaderFooterPage:true})

})


module.exports = router;