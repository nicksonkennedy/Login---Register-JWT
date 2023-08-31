const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const connectDB = require('./config/db');
const cors = require('cors') ///Module for linking the backend to the frontend

dotenv.config({path: './config/config.env'})

const app = express()
const PORT = process.env.PORT || 8000

//middleware for backend-frontend connectivity
app.use(cors({
    origin: "http://localhost:3000", //URL of the react App
    credentials: true
  }))
  
//body and json parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//connect db
connectDB()





//Post regsiter route
app.use('/api', require('./routes/user'))



app.listen(PORT, ()=>console.log(`Server started on port: ${PORT}`))