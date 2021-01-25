const { urlencoded } = require('express');
const express = require('express');
const port = process.env.PORT || 4234;
const booksRouter = require('./src/routers/booksRouter');
const authorsRouter = require('./src/routers/authorsRouter');
const addbookRouter = require('./src/routers/addbookRouter');
const signinRouter = require('./src/routers/signinRouter');
const signupRouter = require('./src/routers/signupRouter');
const addauthorRouter = require('./src/routers/addauthorRouter');

const app = express();

app.use(express.urlencoded ({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/addbook',addbookRouter);
app.use('/signup',signupRouter);
app.use('/signin',signinRouter);
app.use('/addauthor',addauthorRouter);



app.get('/',function(req,res){
    res.render("index",
    {
        nav:[{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/addbook',name:'ADD BOOK'},{link:'/update',name:' UPDATE BOOK'},{link:'/delete',name:'DELETE BOOK'}],
        nav1:[{link:'/signup',name:'SIGN UP'},{link:'/signin',name:'SIGN IN'}]
    });
});


app.listen(port);