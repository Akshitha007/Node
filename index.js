const express = require('express')
const app=express();
const fs= require('os');
app.get('/', function (req, res) {
    res.send('loaded successfully')
  });
app.use(express.static(__dirname));
app.get("/about",function(req,res){
    res.sendFile(__dirname+"/about.html")
});
app.get("*",function(req,res){
    res.send("page not found")
})
  app.listen('5005',function(){
    console.log("server started");
  });
  app.get("/loadparams",function(req,res){
    console.log(req.params);
    res.send("Param Example");
});

app.get("/loadparams/:id/:name",function(req,res){
    console.log(req.params);
    res.send("Param Example");
});
