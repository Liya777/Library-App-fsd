const express = require('express');
const addauthorRouter = express.Router();
var multer  = require('multer');
const upload = require('express-fileupload');
const fs = require("fs");
// const path = require('path');
const authordata =require('../model/authordata');
addauthorRouter.use(upload());
addauthorRouter.use(express.urlencoded({extended:true}));
addauthorRouter.use(express.static('./public'));
addauthorRouter.get('/',function(req,res){
    res.render("addauthor",
    {
        nav:[{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/addbook',name:'ADD BOOK'},{link:'/addauthor',name:'ADD AUTHOR'}],
        nav1:[{link:'/',name:'LOG OUT'}],
    });
});
addauthorRouter.post('/done',function(req,res){
    // var imgnew = req.file.img;
//      var fileName = req.body.img;
//      imgnew.mv('../images/' + fileName + '.jpg' , function(err) {
//          if(err){
//            console.log(err);
//          }else{ 
//         console.log("uploaded");
//    }
//     });
    var item={
        author: req.body.author,
        born: req.body.born,
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

    

    var author = authordata(item);
    author.save();
    authordata.find()
    .then(function(authors){
        res.redirect('/authors');
    //      res.render("authors",
    // {
    //     nav:[{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/addbook',name:'ADD BOOK'},{link:'/addauthor',name:'ADD AUTHOR'}],
    //     nav1:[{link:'/',name:'LOG OUT'}],
    //     authors
    // });
    })
});


module.exports = addauthorRouter;