const express=require("express");
const route =express.Router();


route.get("/home",(req,res)=>{
    res.send("<h1>welcome home page</h1>");
})

route.get("/about",(req,res)=>{
    res.send("<h1>welcome about page</h1>");
})

route.get("/contact",(req,res)=>{
    res.send("<h1>welcome contact page</h1>");
})
module.exports=route;