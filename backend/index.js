const connectToMongo = require('./db');




const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv')

//dotenv config
dotenv.config();
//mongoDB connection
connectToMongo();

//rest Object
const app = express()


//middleware
app.use(express.json())
app.use(morgan('dev'))



//routes
app.use('/api/auth', require('./routes/auth'))
// Port
const port = process.env.PORT || 5000


app.listen(port, () =>{
  console.log(`Server Running in ${process.env.NODE_MODE} mode on port ${process.env.PORT}`
  .bgCyan.white
  );
});

