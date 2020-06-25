const mongoose = require('mongoose')


//creating model schema
//it will be follwed while inserting data to mongo
//this will avoid unnecessary error
const publicationSchema= new mongoose.Schema({
    publication:{
        type: String,
        required:true
    }

})

//to use this schema we need to export this module
module.exports = mongoose.model('Publication',publicationSchema)//for inserting article this schema will be required