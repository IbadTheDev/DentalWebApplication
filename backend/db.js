const mongoose = require('mongoose');
const colors = require('colors')
const mongoURI = "mongodb+srv://ibadkhan:alzz2599@cluster0.yi2kvb9.mongodb.net/DentalDB?retryWrites=true&w=majority"

const connectToMongo = async()=> {
    
        try {
            await mongoose.connect(process.env.MONGO_URL)
            console.log(`Connected to mongo succesfully`.bgGreen.white);

        } catch (error) {
         console.log(`MongoDB Server Issue ${error}`.bgRed.white)   
        }
        
        
    };
mongoose.set('strictQuery', false);

module.exports = connectToMongo;

