const mongoose= require('mongoose');
const universityschema = new mongoose.Schema({
      universityName:{
            type:String,
            required:true,
            trim:true
      },
      affiliateBy:{
            type:String,
            required:true,
            trim:true
      },
      location:{
            type:String,
            required:true,
            trim:true
      },
      numberOfCourses:{
            type:Number,
            required:true,
            trim:true
      },
      imageUrl:{
            type:String,
            required:true,
            trim:true
      }
  })

  let University = mongoose.model('University' , universityschema);
  module.exports =University;