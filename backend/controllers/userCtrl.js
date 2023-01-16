const User = require('../models/User')
const bcrypt = require('bcryptjs')

//Login Callback
const registerController = async (req,res) => {
try {
    const existingUser = await User.findOne({email:req.body.email})
    if(existingUser){
        return res.status(200).send({message: 'User already Exists', success:false})
    }  
    const password = req.body.password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    req.body.password = hashedPassword
    const newUser = new User(req.body)
    await newUser.save()
    res.status(201).send({message: 'Registered succesfully', success: true});
}  catch (error) {
    console.log(error)
    res.status(500)
    .send({
        success:false,
        message: `register Controller ${error.message}`,
    });
}
};

const loginController = () => {};

module.exports = {loginController, registerController};

