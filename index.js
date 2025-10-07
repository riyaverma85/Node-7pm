// const http = require("http");
 
// http.createServer((reg,res)=>{
//     res.write("<h1>hello world</h1>");
//     res.end();
// }).listen(8000);

const http = require("http");
http.createServer((reg,res)=>{
  res.write("<h1>hello we are learning node js</h1>");
  res.end("end server");
}).listen(4000);













