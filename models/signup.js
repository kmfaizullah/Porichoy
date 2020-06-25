const mongoose = require('mongoose')


//creating model schema
//it will be follwed while inserting data to mongo
//this will avoid unnecessary error
const signupSchema= new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email: {
        type: String,
        required :true
    },
    password:{
        type:String,
        required: true
    },
    number:{
        type: String,
        required : true
    }

})

//to use this schema we need to export this module
module.exports = mongoose.model('Signup',signupSchema)//for inserting article this schema will be required