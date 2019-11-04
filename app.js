var express =require('express');
var app = express();
var path =require("path");
var fs = require('fs');
// var popup = require('popups');
var alert =require('alert-node');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

const ejs =require('ejs');

app.engine('html', ejs.renderFile);
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'html');
 
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


app.post('/', function (req, res) {
    // console.log(req.body);
    var fields = ['Name', 'Email', 'Company/College', 'Phone Number', 'Questions/Remarks'];
    var name = req.body.name;
    var email = req.body.email;
    var compcoll = req.body.comporcoll;
    var phnum = req.body.phonenumber;
    var msg = req.body.message;
    var data = [name, email, compcoll, phnum, msg];

    fs.stat('Registered_data.csv', function (err, stat) {
    if (err == null) {
        console.log('File exists');

        //write the actual data and end with newline
        data = data + '\r\n';

        fs.appendFile('Registered_data.csv', data, function (err) {
            if (err) throw err;
            console.log('The data was appended to file!');
            // alert(" Registration successfull")
            res.render('index');
        });
    }

    else {
        //write the headers and newline
        console.log('Creating new file...');
        fields= (fields + '\r\n' + data + '\r\n');

        fs.writeFile('Registered_data.csv', fields, function (err) {
            if (err) throw err;
            console.log('File created and updated.');
            res.render('index');
            alert(" Registered successfully.");
        });
    }
    })
    // popup.alert({
    //     content: 'Hello!'
    // });
   
   
  });