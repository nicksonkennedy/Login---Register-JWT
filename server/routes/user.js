const express = require('express')
const router = express.Router()
const User = require('../models/User') //User Model
const jwt = require('jsonwebtoken')

//Toekn
const createToken = (_id) =>{
return jwt.sign({_id}, process.env.SECRET, {expiresIn:'2d'})
}


router.post('/register',async (req, res)=>{
    const {email, password} = req.body
    try {
        const user = await User.signup(email, password)
        //token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json(error.message)
    }

})


//loggin
    router.post('/login', async (req, res)=>{
        const {email, password} = req.body
    try {
        const user = await User.login(email, password)
        //token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json(error.message)
    }
    })

    router.get('/sample' , (req, res)=>{
        res.send('welcome home')
    })

module.exports = router