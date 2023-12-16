const express=  require("express")
const router = express.Router()
const {allPendingOrders,receiveingTheOrder,orders,rejectedOrders} = require("../models/hiringOperation")


router.get("/", async(req,res)=>{
    let userCredentials = req.session.user
    let pendingOrders = await allPendingOrders()
    let receivedOrder = await orders()
    
    res.render("admin",{userCredentials,pendingOrders,receivedOrder})
})

router.post("/",async(req,res)=>{
    console.log(req.body.email);
    let email = req.body.email
    let receivedOrder = await receiveingTheOrder(email)
    console.log(receivedOrder)
    res.redirect("/admin");

})
router.post("/reject",async(req,res)=>{
    let email = req.body.emailToDelete;
    let rejected = await rejectedOrders(email);
    res.redirect("/admin");
})

module.exports = router