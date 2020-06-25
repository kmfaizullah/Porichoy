const express = require('express')
const router = express.Router()//it will help to route
const Article = require('./../models/article') //calling article js from model
const About = require('./../models/about') //calling about js from model
const Publication = require('./../models/publication') //calling publication js from model
const Contact= require('./../models/contact') //calling contact js from model
const Signup= require('./../models/signup') //calling signup js from model



router.get('/new', (req,res)=>{
    res.render('review/new',{article : new Article() })
})

router.get('/about', async (req,res)=>{
    const about = await About.find()
    res.render('review/about', {about: about})
})

router.get('/publication', async (req,res)=>{
    const publication = await Publication.find()
    res.render('review/publication', {publication: publication})
})

router.get('/admin', async (req,res)=>{
    const contact = await Contact.find()
    res.render('review/admin',{contact: contact})
})

router.get('/contact', (req,res)=>{
    res.render('review/contact')
})

router.get('/adminAbout', async(req,res)=>{
    const about = await About.find()
    res.render('review/adminAbout', {about: about})
})

router.get('/adminAboutForm', (req,res)=>{
    res.render('review/adminAboutForm')
})

router.get('/java', (req,res)=>{
    res.render('review/java')
})

router.get('/dataStructures', (req,res)=>{
    res.render('review/dataStructures')
})

router.get('/adminPublication', async (req,res)=>{
    const publication = await Publication.find()
    res.render('review/adminPublication',{publication : publication})
})

router.get('/adminPublicationForm', (req,res)=>{
    res.render('review/adminPublicationForm')
})

router.get('/adminLogin', (req,res)=>{
    res.render('review/adminLogin')
})

router.get('/signup', (req,res)=>{
    res.render('review/adminSignup')
})

router.get('/adminProfile', async (req,res)=>{
    const articles = await Article.find().sort({createdAt : 'desc'})
    res.render('review/adminProfile',{articles : articles})
})

router.get('/:id', async (req, res)=>{
    const article = await Article.findById(req.params.id)
    if(article==null) res.redirect('/')
    res.render('review/show',{article : article})

    
})

//this is collecting data from a form
// and send it to db
router.post('/articleInsert', async (req,res)=>{
    let article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })

    try{

        article = await article.save()
        res.redirect(`/review/${article.id}`)
    } catch(e){
        res.render('review/new',{article : article})
    }

   
})

//this is for adminAboutForm data
// and send it to db
router.post('/aboutInsert', async (req,res)=>{
    let about = new About({
        name: req.body.name,
        summary : req.body.summary,
        graduate : req.body.graduate,
        hsc:req.body.hsc,
        ssc:req.body.ssc,
        language: req.body.language,
        framework:req.body.framework,
        others:req.body.others,
        leader: req.body.leader

    })

    try{

        about = await about.save()
        res.redirect('/review/adminAbout')
    } catch(e){
        
    }

   
})

//this is for adminAboutForm data
// and send it to db
router.post('/publicationInsert', async (req,res)=>{
    let publication = new Publication({
        publication: req.body.publication

    })

    try{

        publication = await publication.save()
        res.redirect('/review/adminPublication')
    } catch(e){
        
    }

})

//this is for signup data
// and send it to db
router.post('/signup', async (req,res)=>{
    let signup = new Signup({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        number: req.body.number

    })

    try{

        signup = await signup.save()
        res.redirect('/review/adminLogin')
    } catch(e){
        res.redirect('/review/adminSignup')
    }

})

//for login 
router.post('/login', async (req,res)=>{
    Login = {
        Email: req.body.email,
        Password: req.body.password
    }

    try{

        const signup = await Signup.find()
        
        for (val of signup) {
            if((val.email == Login.Email) && (val.password == Login.Password)){
                
                res.redirect('/review/admin')
            }
            else{
                console.log(val.email)
                console.log(Login.Email)
                console.log(val.password)
                console.log(Login.Password)
                res.redirect('/review/adminLogin')
            }
          }

        
    } catch(e){
        
    }

})


//this is for adminAboutForm data
// and send it to db
router.post('/contactInsert', async (req,res)=>{
    let contact = new Contact({
        name: req.body.name,
        cnumber: req.body.cnumber,
        address: req.body.address,
        message: req.body.message

    })

    try{

        contact = await contact.save()
        res.redirect('/review/contact')
    } catch(e){
        
    }

})



router.delete('/:id', async (req,res)=>{
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/review/adminProfile')

})


router.delete('/about/:id', async (req,res)=>{
    await About.findByIdAndDelete(req.params.id)
    res.redirect('/review/adminAbout')

})

router.delete('/publication/:id', async (req,res)=>{
    await Publication.findByIdAndDelete(req.params.id)
    res.redirect('/review/adminPublication')

})

router.delete('/contact/:id', async (req,res)=>{
    await Contact.findByIdAndDelete(req.params.id)
    res.redirect('/review/admin')

})


module.exports = router //to read the route we need to export it

