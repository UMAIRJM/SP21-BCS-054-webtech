
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
    
    if(auth.auth == true){
        if(req.body.email=="admin456@gmail.com"){
            req.session.admin = true
        }
        else{
            req.session.admin = false
        }
        req.session.isAuthenticated = true
        req.session.user = {
            email:req.body.email,
            userName:auth.userName
        }
        console.log("Admin status:"+ req.session.admin)
        console.log(req.session.user)
        res.redirect("/main")
    }
    else{
        res.render("signInScreen",{notheaderFooterPage:true,error:"Wrong Email or Password"})
    }

})



router.get("/",(req,res)=>{
    res.render("signInScreen",{notheaderFooterPage:true})

})


module.exports = router;