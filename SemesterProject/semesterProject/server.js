const bodyParser = require("body-parser")
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const mongoose = require("mongoose")
const {newFeedback} = require("./models/operations")
const app = express()
const {newUser} = require("./models/signUpOperations")
const  port = 3000
app.set("view engine","ejs")
app.set("layout","./layouts/mainLayout")
app.use(expressLayouts)
app.use(express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.locals.notheaderFooterPage = false;
mongoose.connect("mongodb+srv://umairkmehmood789:umair789@cluster0.pkhdli3.mongodb.net/portfolioData?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("sucessfully connected to database")
}).catch((error)=>{
    console.log(error)
    console.log("Error occured while coonecting to database")

})
app.get("/",(req,res)=>{
    res.render("landingpage")
})

app.get("/signUp",(req,res)=>{
    res.render("signUpScreen",{notheaderFooterPage:true})

})
app.post("/signUp",async (req,res)=>{
    let data = req.body
    let firstname = data.firstName
    let lastname = data.secondName
    let phoneNUmber  = data.phoneNumber
    let email= data.emailAddress
    let password = data.passwordField
    await newUser(firstname,lastname,phoneNUmber,email,password)
    res.render("signInScreen",{notheaderFooterPage:true})


    
})

app.get("/login",(req,res)=>{
    res.render("signInScreen",{notheaderFooterPage:true})

})
app.post("/feedback",async (req,res)=>{
    // res.render("login")
    console.log(req.body)
    let feedback = req.body.feedback
    await newFeedback(feedback)
    res.render("landingpage")
})
app.listen(port,()=>{
    console.log("Server started in port :" + port)
})