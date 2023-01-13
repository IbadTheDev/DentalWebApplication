const express = require('express');
const router = express.Router();
const User = require('../models/User');
const {body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_secret = "IbadsCode";


//Create a user using: POST "/api/auth/createuser"
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({min : 3}),
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Enter a valid passsword').isLength({min : 5}),

], async (req, res)=>{
    //return error
   const errors  = validationResult(req);
   if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
   }

   //user creation
   try{
   let user = await User.findOne({email:req.body.email});
   if (user){
    return res.status(400).json({error: "Email already in use."})
   }
   const salt = await bcrypt.genSalt(10);
   const secPass = await bcrypt.hash(req.body.password, salt);
   //create a new user
   user = await User.create({
    name: req.body.name,
    password: secPass,
    email: req.body.email
    })

    const data = {
        user:{
            id: user.id
        }

    }
const jwtData = jwt.sign(data, JWT_secret);
console.log(jwtData);
   
   res.json(user)

} catch(error){

    console.error(error.message);
    res.status(500).send("Some error occured");
}

})

module.exports = router