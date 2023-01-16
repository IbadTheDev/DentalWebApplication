const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
name: {
        type: String,
        required: [true, 'Name is required']
},
email: {
    type: String,
    required: [true, 'Email is required'],
    unique:true
},
password: {
    type: String,
    required: [true, 'Password is required'],
},
date:{
    type: Date,
    default: Date.now
},

});
const User = mongoose.model('users', UserSchema);
module.exports = User;