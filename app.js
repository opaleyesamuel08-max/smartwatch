var express=require('express');
var server=express();
var path=require('path');
    server.set('view engine', 'ejs')




    server.get('/', function(req, res){

        var message='Welcome to my Website';

        res.sendFile(path.join(__dirname, 'public', 'index.html'));
        //res.render('index', { message: message })


    })

    server.get('/about', function(req, res){

        var message='Welcome to my Website';

        res.sendFile(path.join(__dirname, 'public', 'about.html'));
        //res.render('index', { message: message })


    })

    server.get('/gallery', function(req, res){

        var message='Welcome to my Website';

        res.sendFile(path.join(__dirname, 'public', 'gallery.html'));
        //res.render('index', { message: message })


    })

    server.get('/partners', function(req, res){

        var message='Welcome to my Website';

        res.sendFile(path.join(__dirname, 'public', 'partners.html'));
    })

    server.get('/contact', function(req, res){

        var message='Welcome to my Website';

        res.sendFile(path.join(__dirname, 'public', 'contact.html'));
    })




    






    server.listen(3000, function(){
        console.log("Server is running on port 3000");  
    });
