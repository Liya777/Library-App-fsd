const express = require('express');
const addbookRouter = express.Router();
const bookdata = require('../model/bookdata');
const addauthorRouter = require('./addauthorRouter');
var multer  = require('multer');
const upload = require('express-fileupload');
const fs = require("fs");
addbookRouter.use(upload());
addbookRouter.use(express.static('./public'));
addbookRouter.use(express.urlencoded({extended:true}));
addbookRouter.get('/',function(req,res){
    res.render("addbook",
    {
        nav:[{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/addbook',name:'ADD BOOK'},{link:'/addauthor',name:'ADD AUTHOR'}],
        nav1:[{link:'/',name:'LOG OUT'}],
    });
});
addbookRouter.post('/done',function(req,res){
    var item={
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        more: req.body.more,
        img: req.files.img1.name
    }
    
    var file = req.files.img1;
    var filename = req.files.img1.name;

    
    file.mv("./public/images/"+filename,function(err){
        if(err){
            res.send(err);
        }
    });



    var book = bookdata(item);
    book.save();
    bookdata.find()
    .then(function(books){
        res.redirect('/books');
    //      res.render("books",
    // {
    //     nav:[{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/addbook',name:'ADD BOOK'},{link:'/addauthor',name:'ADD AUTHOR'}],
    //     nav1:[{link:'/',name:'LOG OUT'}],
    //     books
    // });
    
    })
});

module.exports = addbookRouter;