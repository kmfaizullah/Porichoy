const express = require('express')
const mongoose = require('mongoose')//calling library for connecting with db
//for accessing article model
const Article = require('./models/article')
const methodOverride = require('method-override')// for delete option
mongoose.connect('mongodb://localhost/blog',{ useNewUrlParser: true,useUnifiedTopology: true })//connecting blog database
const app = express()//setting express server

//to access all parameters of from to model we need server to instruct
app.use(express.urlencoded({extended :false}))
app.use(methodOverride('_method')) // using method override.It will over ride the method

//seeting router to get route in different page
// we did it to make code concise
const reviewRouter = require('./routes/review')// setting relative path

//calling reviewRouters
//in every route we want to add /review route
app.use('/review',reviewRouter)

app.use( express.static( "public" ) );//for image folder

//setting view engine for html pages
//we will write ejs code and view engine will convert it to html
app.set('view engine', 'ejs')

//setting route.here '/' for calling the index file
//render is required to call html pages
app.get('/', async (req,res)=>{
    //creating article objects
    const articles = await Article.find().sort({createdAt : 'desc'})
    const arti=[
        articles,articles
  
    ]
    
    res.render('review/index', {articles : arti}) //rendering index page and sending data objects
   
})



app.listen(5000)//setting port 5000