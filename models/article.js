const mongoose = require('mongoose')

const slugify = require('slugify')// for url modification
//creating model schema
//it will be follwed while inserting data to mongo
//this will avoid unnecessary error
const articleSchema= new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    description: {
        type: String
    },
    markdown:{
        type:String,
        required: true
    },
    createdAt:{
        type:Date,
        default : Date.now
    }

})

//to use this schema we need to export this module
module.exports = mongoose.model('Article',articleSchema)//for inserting article this schema will be required