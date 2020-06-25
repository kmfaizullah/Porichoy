const mongoose = require('mongoose')

//creating model schema
//it will be follwed while inserting data to mongo
//this will avoid unnecessary error
const contactSchema= new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    cnumber: {
        type: String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    message:{
        type:String,
        required : true
    }

})

//to use this schema we need to export this module
module.exports = mongoose.model('Contact',contactSchema)//for inserting article this schema will be required