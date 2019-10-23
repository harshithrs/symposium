var express =require('express');
var app = express();
var path =require("path");

app.use(express.static('public'));

 
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,'./views',  'index.html'));
    // res.sendFile(path.join('index.html'));
    // res.sendFile('index.html', { root: path.join(__dirname, '../views') });
})

app.listen(3000,function(err){
    if(err){
        console.log("not started");
    }else{
        console.log("server started")
    }
})