const express = require("express");

const app = express();

app.get("/",function(req,res){
    res.send("Hello there");

});


app.listen("8080",function(){
    console.log("running on port 8080")
});