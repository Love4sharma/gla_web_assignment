const express = require('express');
const app = express();
const mongoose=require('mongoose');
const path = require('path');
const methodOverride = require('method-override')
const seedDB = require('./seed')
const universityroutes=require('./routes/university');


mongoose.connect('mongodb://127.0.0.1:27017/universitydata')
.then(()=>{
    console.log("DB connected successfully")
})
.catch((err)=>{
    console.log("DB error"); 
    console.log(err)
})

// seedDB();

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'view')); // views folder 
app.use(express.static(path.join(__dirname , 'public'))); // public folder
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(universityroutes);


app.listen(8080 , ()=>{
      console.log("server connected at port 8080")
  })