const express = require('express');
const booksRouter = express.Router();
const bookdata = require('../model/bookdata');
booksRouter.use(express.static('./public'));

// var books = [
//     {
//         title: 'STAY WITH ME',
//         author: 'K L Slater',
//         genre: 'Thriller',
//         img: "1.jpg",
//         more:'SHORTLISTED FOR THE 2017 BAILEYS WOMEN S PRIZE FOR FICTION SHORTLISTED FOR THE 2018 WELLCOME BOOK PRIZE LONGLISTED FOR THE 2018 INTERNATIONAL DYLAN THOMAS PRIZE NEW YORK TIMES 100 NOTABLE BOOKS OF 2017 Yejide is hoping for a miracle, for a child. It is all her husband wants, all her mother-in-law wants, and she has tried everything - arduous pilgrimages, medical consultations, appeals to God. But when her relatives insist upon a new wife, it is too much for Yejide to bear. It will lead to jealousy, betrayal and despair. Unravelling against the social and political turbulence of 1980s Nigeria, Stay With Me sings with the voices, colours, joys and fears of its surroundings. Ayobami Adebayo weaves a devastating story of the fragility of married love, the undoing of family, the wretchedness of grief, and the all-consuming bonds of motherhood. It is a tale about our desperate attempts to save ourselves and those we love from heartbreak.'
//     },
//     {
//         title: 'SILENT SCREAM',
//         author: 'Angela Marsons',
//         genre: 'Psychological thriller',
//         img: "2.jpg",
//         more:'Even the darkest secrets can’t stay buried forever… Five figures gather round a shallow grave. They had all taken turns to dig. An adult sized hole would have taken longer. An innocent life had been taken but the pact had been made. Their secrets would be buried, bound in blood …Years later, a headmistress is found brutally strangled, the first in a spate of gruesome murders which shock the Black Country.But when human remains are discovered at a former children’s home, disturbing secrets are also unearthed. D.I. Kim Stone fast realises she’s on the hunt for a twisted individual whose killing spree spans decades.As the body count rises, Kim needs to stop the murderer before they strike again. But to catch the killer, can Kim confront the demons of her own past before it’s too late?'
//     },
//     {
//         title: 'THE KITE RUNNER',
//         author: 'Khaled Hosseini',
//         genre: 'Drama',
//         img: "3.jpg",
//         more:'Afghanistan, 1975: Twelve-year-old Amir is desperate to win the local kite-fighting tournament and his loyal friend Hassan promises to help him. But neither of the boys can foresee what will happen to Hassan that afternoon, an event that is to shatter their lives. After the Russians invade and the family is forced to flee to America, Amir realises that one day he must return to Afghanistan under Taliban rule to find the one thing that his new world cannot grant him: redemption.'
//     },
//     {
//         title: 'WHEN LOVE CAME CALLING',
//         author: 'Preeti Shenoy',
//         genre: 'Romance',
//         img: "4.jpg",
//         more:'Puja-19, confused, energetic, fiery. Her philosophy - Life is complicated and only super achievers have it figured out. Her strict mother sends her to a rural location in Kerala to spend her summer vacation doing volunteer work. Arush - 20, studious, careful, shy. Born and raised in Britain, he is elated when he gets an opportunity to spend 12 weeks in India, a place his parents are from and one he has never been to.When Puja and Arush meet, their stark differences are obvious to each other. But with choppy internet and no other distractions, they start getting to know each other and slowly fall in love. But falling in love and staying in love are not the same thing. When disaster strikes, Puja is forced to confront the harsh realities of life while Arush realises that India is not always the picture-perfect postcard he presumed it was. Desperately fighting to expose the truth and save themselves, what happens to their love? Is it strong enough to survive forces beyond their control? Is it deep enough to drown their own doubts?Sometimes you have to travel far to find your true self.An intensely gripping novel from Preeti Shenoy, about young love and discovery.'
//     }
//     ]

    
booksRouter.get('/',function(req,res){
    bookdata.find()
    .then(function(books){
         res.render("books",
    {
        nav:[{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/addbook',name:'ADD BOOK'},{link:'/addauthor',name:'ADD AUTHOR'}],
        nav1:[{link:'/',name:'LOG OUT'}],
        books
    });
    })
   
});
booksRouter.get('/deletebook',function(req,res){
    res.render("delete",
    {
        nav:[{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/addbook',name:'ADD BOOK'},{link:'/addauthor',name:'ADD AUTHOR'}],
        nav1:[{link:'/',name:'LOG OUT'}],
    });
    
});
booksRouter.get('/update',function(req,res){
    res.render("update",
    {
        nav:[{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/addbook',name:'ADD BOOK'},{link:'/addauthor',name:'ADD AUTHOR'}],
        nav1:[{link:'/',name:'LOG OUT'}]
    });
});
booksRouter.get('/bookupdate',function(req,res){
    const uptitle = req.query.title;
    const upmore = req.query.more;
    const upimg = req.query.img;
    bookdata.updateOne({title:uptitle},{$set:{more:upmore,img:upimg}})
    // bookdata.find()
        .then(function(books){
            res.redirect('/books');
    //      res.render("books",
    // {
    //     nav:[{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/addbook',name:'ADD BOOK'},{link:'/addauthor',name:'ADD AUTHOR'}],
    //     nav1:[{link:'/',name:'LOG OUT'}],
    //     books
    // });
    })
    // .then(function(books){
    //     bookdata.find()
    //     .then(function(books){
    //      res.render("books",
    //  {
    //     nav:[{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/addbook',name:'ADD BOOK'},{link:'/addauthor',name:'ADD AUTHOR'}],
    //     nav1:[{link:'/',name:'LOG OUT'}],
    //      books
    //  });
    //  })
    // })
});
booksRouter.get('/bookdel',function(req,res){
    const deltitle = req.query.title;
    bookdata.remove({title:deltitle})
    .then(function(books){
        res.redirect('/books');
    })
});
booksRouter.get('/:id',function(req,res){
    const id = req.params.id;
    bookdata.findOne({_id:id})
    .then(function(book){
        res.render("book",
   {
       nav:[{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/addbook',name:'ADD BOOK'},{link:'/addauthor',name:'ADD AUTHOR'}],
       nav1:[{link:'/',name:'LOG OUT'}],
       book
   });
   })
});

module.exports = booksRouter;