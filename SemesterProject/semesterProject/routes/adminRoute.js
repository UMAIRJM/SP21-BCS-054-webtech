const express=  require("express")
const router = express.Router()
const {allPendingOrders} = require("../models/hiringOperation")


router.get("/", async(req,res)=>{
    let userCredentials = req.session.user
    let orders = await allPendingOrders()
    console.log(orders)
    res.render("admin",{userCredentials,orders})
})

module.exports = router