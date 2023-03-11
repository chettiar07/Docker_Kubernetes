const express = require("express");
const redis = require("redis");
const process = require("process");


const app = express();
const client = redis.createClient({
    host: "redis-server",
    port: 6379
});
client.set("visits",0);



app.get("/",function(req,res){
    process.exit(0)
    client.get("visits",function(err,visits){
        res.send("number of Visits is "+visits);
        client.set("visits",parseInt(visits)+1);
    });
});


app.listen("8080",function(){
    console.log("listening on port 8080")
})