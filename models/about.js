const mongoose = require('mongoose')


//creating model schema
//it will be follwed while inserting data to mongo
//this will avoid unnecessary error
const aboutSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    summary: {
        type: String
    },
    graduate:{
        type:String
    },
    hsc:{
        type:String
    },
    ssc:{
        type:String
    },
    language:{
        type:String
    },
    framework:{
        type:String
    },
    others:{
        type:String
    },
    leader:{
        type:String
    }

})

//to use this schema we need to export this module
module.exports = mongoose.model('About',aboutSchema)//for inserting article this schema will be required