const express = require('express')
const router = express.Router()
const {registerController} = require('../controllers/userCtrl')


//Create a user using: POST "/api/auth/createuser"
router.post('/register', registerController);


// Login POST
// router.post('/login', loginController);

//Authanticate a user using post "api/auth/login"
// router.post('/login', loginController [
//     body('email', 'Enter a valid Email').isEmail(),
//     body('password', 'Enter a Password').exists()
// ], async (req, res)=>{
//     //return error
//    const errors  = validationResult(req);
//    if(!errors.isEmpty()){
//     return res.status(400).json({errors:errors.array()});
//    }

// const {email, password} = req.body;
// try{
//     let user = await User.findOne({email});
//     if (!user){
//         return res.status(400).json({error: "Incorrect credentials"});
//     }
//     const passwordCompare = await bcrypt.compare(password, user.password);
//     if (!passwordCompare){
//         return res.status(400).json({error: "Incorrect credentials"});
//     }

//     const data = {
//         user:{
//             id: user.id
//         }
//     }
// const authToken= jwt.sign(data, JWT_secret);
//    res.json({authToken})

// } catch(error){

//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
// }

// });


// //Get loggedin User Details using POST "/api/auth/getuser" Login required
// router.post('/getuser', fetchUser, async (req, res)=>{

// try {
    
//     var userId= req.user.id;
//     const user = await User.findById(userId).select("-password");
//     res.send(user);

    
// } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
    
// }
//})
module.exports = router;