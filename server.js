// const express = require('express');

//  const app = express(); //server instance created


//  app.get("/", (req, res)=>{
//     res.send("Hello World");
//  });
//  app. get("/About", (req, res)=>{
//     res.send("About page")
//  });
 
//  app.listen(3000,()=>{
//     console.log('Server is running on port 3000');
//  });

const app = require("./src/app");

app.listen(3000, ()=>{
    console.log("Server is running on port number 3000")
});