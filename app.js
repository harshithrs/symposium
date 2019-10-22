var express =require('express');
var app = express();
var path =require("path");


app.use(express.static('public'));

app.use('/fonts', express.static(__dirname + '/assests/fonts/font-awesome.min.css'));
app.use('/css', express.static(__dirname + '/assests/css'));
app.use('/images', express.static(__dirname + '/assests/img'));
app.use('/js',express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js',express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css',express.static(__dirname + '/node_modules/bootstrap/dist/css'));
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