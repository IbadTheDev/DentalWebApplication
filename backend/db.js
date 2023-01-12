const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://ibadkhan:alzz2599@cluster0.yi2kvb9.mongodb.net/DentalDB?retryWrites=true&w=majority"

const connectToMongo = ()=> {
    mongoose.connect(mongoURI, ()=>{
        
        console.log("Connected to mongo succesfully");

    })

}
mongoose.set('strictQuery', false);

module.exports = connectToMongo;

