
const express = require("express");
const { route } = require("./signUpRoute");

const router = express.Router();
router.get("/",(req,res)=>{
    const resultsArrayEjs = req.session.resultsArray
    res.render("calculator",{resultsArrayEjs})


})

router.post("/",(req,res)=>{
    req.session.resultsArray = req.session.resultsArray || [];
    let data  = req.body
    const operand1 = data.operand1
    const operand2 = data.operand2
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);
    console.log(num1 +"    " + num2)
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid operands' });
    }
    const operator = data.operation
    let result;
    switch(operator){
        case '+':
            result = num1 + num2
            break
        case '-':
            result = num1 - num2
            break
        case '/':
            result = num1 / num2
            break
        case '*':
            result = num1 * num2
            break
            
            

    }
    if (isNaN(result) || !isFinite(result)) {
        return res.status(400).json({ error: 'Invalid result' });
    }
    console.log(result)
    result = parseFloat(result)
    const resultObject = {
        operator1:operand1,
        operator2:operand2,
        operation:operator,
        result: result

    }

    req.session.resultsArray.push( {
        
        operator1:operand1,
        operator2:operand2,
        operation:operator,
        result: result
    })
    console.log(req.session.resultsArray)
    const resultsArrayEjs = req.session.resultsArray
    console.log(resultsArrayEjs)
    res.render("calculator",{resultsArrayEjs})
})

module.exports = router