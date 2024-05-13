const mongoose = require('mongoose');

const University=require('./models/University');


// const data=[
//           {
//             universityName:"GLA University",
//             affiliateBy:"UCC",
//             location:"Mathura",
//             numberOfCourses:2,
//             imageUrl:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D"
//           },
//           {
//             universityName:"GLA University",
//             affiliateBy:"UCC",
//             location:"Mathura",
//             numberOfCourses:2,
//             imageUrl:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D"
//           },
//           {
//             universityName:"GLA University",
//             affiliateBy:"UCC",
//             location:"Mathura",
//             numberOfCourses:2,
//             imageUrl:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D"
//           },
//           {
//             universityName:"GLA University",
//             affiliateBy:"UCC",
//             location:"Mathura",
//             numberOfCourses:2,
//             imageUrl:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D"
//           },
//           {
//             universityName:"GLA University",
//             affiliateBy:"UCC",
//             location:"Mathura",
//             numberOfCourses:2,
//             imageUrl:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D"
//           },
//           {
//             universityName:"GLA University",
//             affiliateBy:"UCC",
//             location:"Mathura",
//             numberOfCourses:2,
//             imageUrl:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D"
//           },
//           {
//             universityName:"GLA University",
//             affiliateBy:"UCC",
//             location:"Mathura",
//             numberOfCourses:2,
//             imageUrl:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D"
//           },
//           {
//             universityName:"GLA University",
//             affiliateBy:"UCC",
//             location:"Mathura",
//             numberOfCourses:2,
//             imageUrl:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D"
//           },
//           {
//             universityName:"GLA University",
//             affiliateBy:"UCC",
//             location:"Mathura",
//             numberOfCourses:2,
//             imageUrl:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D"
//           },
//           {
//             universityName:"GLA University",
//             affiliateBy:"UCC",
//             location:"Mathura",
//             numberOfCourses:2,
//             imageUrl:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D"
//           },
// ];


      async function seedDB(){
            await University.insertMany(data);
            console.log("data is seeded successfully");
      }

      module.exports = seedDB;