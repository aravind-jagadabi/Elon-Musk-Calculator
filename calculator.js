const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    var val1 = Number(req.body.num1);
    var val2 = Number(req.body.num2);
    var total = val1+val2;
    
    res.send("The total is:"+total);
})
app.listen(3000,function(){
    console.log("server has started on port 3000");
});