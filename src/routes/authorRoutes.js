const express = require('express');
const authorsRouter = express.Router();
const authordata =require('../model/authordata');
authorsRouter.use(express.static('./public'));
// authors = [
//     {
//        name: "K L Slater",
//        date: "United Kingdom",
//        genre: "Suspense, Thriller",
//        img: "5.jpg",
//        more: "For many years, Kim sent her work out to literary agents but never made it off the slush pile. At the age of 40 she went back to Nottingham Trent University and now has an MA in Creative Writing."
//     },
//     {
//         name: "Angela Marsons",
//         date: "1960",
//         genre: "Mystery",
//         img: "6.jpg",
//         more: "Angela Marsons is from Brierley Hill in the West Midlands and is a former security guard at the Merry Hill Shopping Centre. Having been rejected by numerous publishers over 25 years, she released three books in her crime series in 2015 under digital publisher Bookouture. Her books all have a Black Country setting, but the author says I never write about a set group of people or anyone particular I know, all my characters are make believe The principal character in the crime series is Detective Kim Stone. The success of the digitally-published Kim Stone books resulted in a print deal with publisher Bonnier Publishing Fiction. Marsons is signed to Bookouture for a total of 16 books in the Kim Stone series."
//     },
//     {
//         name: "Khaled Hosseini",
//         date: "4 March 1965",
//         genre: "Fiction",
//         img: "7.jpg",
//         more: "Khaled Hosseini was born in Kabul, Afghanistan, in 1965. His father was a diplomat in the Afghan Foreign Ministry and his mother taught Farsi and history at a high school in Kabul. In 1976, the Foreign Ministry relocated the Hosseini family to Paris. They were ready to return to Kabul in 1980, but by then their homeland had witnessed a bloody communist coup and the invasion of the Soviet Army. The Hosseinis sought and were granted political asylum in the United States, and in September 1980 moved to San Jose, California. Hosseini graduated from high school in 1984 and enrolled at Santa Clara University, where he earned a bachelor’s degree in biology in 1988. The following year he entered the University of California, San Diego, School of Medicine, where he earned a medical degree in 1993. He completed his residency at Cedars-Sinai medical center in Los Angeles and was a practicing internist between 1996 and 2004."
//     },
//     {
//         name: "Preeti Shenoy",
//         date: "21 December 1971",
//         genre: "Fiction, nonfiction", 
//         img: "8.jpg",
//         more: "Preeti Shenoy is an Indian author.She has been consistently nominated for the Forbes List of the 100 most influential celebrities in India since 2013.Preeti received the Indian of the Year award by Brands Academy.She has also received Business excellence award instituted by New Delhi Management Institute.India Today calls her 'the only woman in the highest-selling league,' alluding to the popularity of her books."
//      }
//     ]
    
    authorsRouter.get('/',function(req,res){
        authordata.find()
        .then(function(authors){
            res.render("authors",
            {
                nav:[{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/addbook',name:'ADD BOOK'},{link:'/addauthor',name:'ADD AUTHOR'}],
                nav1:[{link:'/',name:'LOG OUT'}],
                authors
            });
    })
        
    });
    authorsRouter.get('/update',function(req,res){
        res.render("updateauth",
        {
            nav:[{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/addbook',name:'ADD BOOK'},{link:'/addauthor',name:'ADD AUTHOR'}],
            nav1:[{link:'/',name:'LOG OUT'}]
        });
    });
    authorsRouter.get('/deleteauthor',function(req,res){
        res.render("deleteauth",
        {
            nav:[{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/addbook',name:'ADD BOOK'},{link:'/addauthor',name:'ADD AUTHOR'}],
            nav1:[{link:'/',name:'LOG OUT'}]
        });
    });
    authorsRouter.get('/authdel',function(req,res){
        const delauthor = req.query.author;
         authordata.remove({author:delauthor})
         .then(function(authors){
            res.redirect('/authors');
            })
    });
    authorsRouter.get('/authupdate',function(req,res){
        const upauthor = req.query.author;
        const upmore = req.query.more;
        const upimg = req.query.img;
        authordata.updateOne({author:upauthor},{$set:{more:upmore,img:upimg}})
        .then(function(authors){
        res.redirect('/authors');
        })
    });
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id;
        authordata.findOne({_id:id})
        .then(function(author){
            res.render("author",
        {
            nav:[{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/addbook',name:'ADD BOOK'},{link:'/addauthor',name:'ADD AUTHOR'}],
            nav1:[{link:'/',name:'LOG OUT'}],
            author
        });
        })
        
    });
    module.exports = authorsRouter;