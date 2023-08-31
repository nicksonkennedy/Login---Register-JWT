const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema =  new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

        // static method for Registration
userSchema.statics.signup = async function(email, password){
    //validation
    if(!email || !password){
        throw Error('All Fields Are Required')
    }

    if(!validator.isEmail(email)){
        throw Error('Email Is Not Valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password Must Be More Than 8 Characters (Lowercase,Uppercase & Symbols)')
    }

    const exists = await this.findOne({email})
    if(exists){
        throw Error('Email Already Available')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = this.create({email, password:hash})
    return user
}


// static login method
userSchema.statics.login = async function(email, password){
     //validation
     if(!email || !password){
        throw Error('All Fields Are Required')
    }

    
    const user = await this.findOne({email})
    if(!user){
        throw Error('Email Does Not Exist')
    }

    const match = await bcrypt.compare(password, user.password)
    if(!match){
        throw Error('Wrong Password')
    }
    return user
}


module.exports = mongoose.model('User',userSchema )