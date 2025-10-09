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



// const http = require("http"); 
//  const fs=require("fs");
// http.createServer((req,res)=>{
//     res.write("<h1>hello world</h1>");
//     fs.readFile("riya.txt",(err,data)=>{
//       if(err) throw err;
//       res.write(data);
//       res.end();
//     })

// }).listen(8000,()=>{
//   console.log("server is run on port 8000");
// });



// const fs =require("fs");
// fs.appendFile("riya.txt","welcome to",(err)=>{
// if (err)throw err;
// console.log("file created")
// })


// const fs =require("fs");
// fs.open("rani.pdf","w",(error,file)=>{
//   if(err)throw err;
//   console.log("file created");
// })

const fs =require("fs");
fs.writeFile("ranu.pdf","welcome",(err)=>{
  if (err)throw err;
  console.log("file created");
})




