const bodyParser = require("body-parser")
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const mongoose = require("mongoose")
const app = express()

const  port = 3000
app.set("view engine","ejs")
app.set("layout","./layouts/mainLayout")
app.use(expressLayouts)
app.use(express.static("public"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.locals.notheaderFooterPage = false;
//All App Routes
const signUpRoute = require("./routes/signUpRoute")
const loginRoute = require("./routes/loginRoute")
const feedbackRoute = require("./routes/feedbackRoutes")
const mainRoute= require("./routes/mainRoute")
//Middleware to use these routes
app.use("/signUp",signUpRoute)
app.use("/login",loginRoute)
app.use("/feedback",feedbackRoute)
app.use("/main",mainRoute)

mongoose.connect("mongodb+srv://umairkmehmood789:umair789@cluster0.pkhdli3.mongodb.net/portfolioData?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("sucessfully connected to database")
}).catch((error)=>{
    console.log(error)
    console.log("Error occured while coonecting to database")

})

app.listen(port,()=>{
    console.log("Server started in port :" + port)
})