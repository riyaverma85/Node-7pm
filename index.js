const http = require("http");
 const fs=require("fs");
http.createServer((reg,res)=>{
    res.write("<h1>hello world</h1>");
    fs.readFile("riya.txt",(err,data)=>{
      if(err) throw err;
      res.write(data);
      res.end();
    })

}).listen(8000,()=>{
  console.log("server is run on port 8000");
});

// const http = require("http");
// const myclg= require("./cybrom")
// const myName= require("./cybrom")
// http.createServer((req,res)=>{

//   res.write("<h1>hello we are learning node js!</h1>");
//   res.write(myclg.mycollege());
//   res.write(myName.myName());
//   res.end();
// }).listen(4000, () =>{
//   console.log("server is running on port 4000");
// });












