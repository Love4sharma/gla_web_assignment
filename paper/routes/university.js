const express = require('express');
const University = require('../models/University');

const router = express.Router() //mini instance

router.get('/universities',async(req,res)=>{
      try{
            let students= await University.find({});
            res.render('index.ejs' , {students});
        }
        catch(e){
            res.status(500).render('error' , {err:e.message});
        }
})


router.get('/university/:id' , async(req,res)=>{
    try{
        let {id} = req.params;
        let university = await University.findById(id);
        res.render('show.ejs' , {university})
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})


// edit
router.get('/university/:id/edit' , async(req,res)=>{
    try{
        let {id} = req.params;
        let funiversity = await University.findById(id);
        res.render('edit.ejs' , {funiversity})
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})


router.patch('/university/:id', async(req,res)=>{
    try{
        let {id} = req.params;
        let {universityName,affiliateBy,location,numberOfCourses,imageUrl} = req.body;
        await University.findByIdAndUpdate( id , {universityName,affiliateBy,location,numberOfCourses,imageUrl} )
        res.redirect(`/university/${id}`);
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})

// to delete university 
router.delete('/university/:id' , async(req,res)=>{
    try{
        let {id} = req.params;

        await University.findByIdAndDelete(id);
        
        res.redirect('/universities');
    }
    catch(e){
        res.status(500).render('error' , {err : e.message});
    }
})

module.exports=router;