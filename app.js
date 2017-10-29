var express = require('express');

var app = express();

var path = require('path');

// Public folder middleware

app.use(express.static(path.join(__dirname, '/views')));

app.set('view engine', 'ejs');

// Routes

//home 

app.get('/', function(req, res){
    res.render('index');
});

app.get('/videopage', function(req, res){
    res.render('videopage');
});

app.get('/forumpage', function(req, res){
    res.render('forumpage');
});

app.get('/about', function(req, res){
    res.render('about');
});

app.get('/', function(req, res){
    res.send("This is the name page");  
});

// notFound
app.get('*', function(req, res){
    res.send();});

// Linking Pages

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+''));
});


// Port Listening 
app.listen(3000, function(){
    console.log("The application is running on local host 3000");
});