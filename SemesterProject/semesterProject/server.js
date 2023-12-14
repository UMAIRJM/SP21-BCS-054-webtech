const bodyParser = require("body-parser")
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const mongoose = require("mongoose")
const app = express()
const session = require("express-session")
const MongoStore  = require("express-session-mongo")

const  port = 3000
app.set("view engine","ejs")
app.set("layout","./layouts/mainLayout")
app.use(expressLayouts)
app.use(express.static("public"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.locals.notheaderFooterPage = false;
//Sessions Completed
app.use(session({
    secret:"Mine secret key",
    resave:false,
    saveUninitialized:true,
    // store:new  MongoStore({
    //     mongoUrl:"mongodb+srv://umairkmehmood789:umair789@cluster0.pkhdli3.mongodb.net/portfolioData?retryWrites=true&w=majority"
    // })
}))

app.use((req, res, next) => {
    req.session.returnTo = req.header('Referer') || '/';
    next();
  });
const isLoggedIn = (req,res,next)=>{
    if(req.session.isAuthenticated){
        return next()
    }
    else{
        res.render('signInScreen',{notheaderFooterPage:true, error:"Please login to perform certain Action"})
    }
}
const authMiddleware = ['/feedback','/hireMe']
app.use(authMiddleware,isLoggedIn)
//All App Routes
const signUpRoute = require("./routes/signUpRoute")
const hireMeroute = require("./routes/hireMeRoute")
const loginRoute = require("./routes/loginRoute")
const feedbackRoute = require("./routes/feedbackRoutes")
const blogsRoute = require("./routes/blogsRoute")
const mainRoute= require("./routes/mainRoute")
//Middleware to use these routes
app.use("/signUp", signUpRoute)
app.use("/blogs",blogsRoute)
app.use("/login",loginRoute)
app.use("/hireMe",hireMeroute)
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