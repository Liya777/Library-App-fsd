const express = require('express');
const detdata = require('../model/unamepass');
const signupRouter = require('./signupRouter');
const signinRouter = express.Router();
signupRouter.use(express.static('./public'));
signinRouter.get('/',function(req,res){
        res.render("signin",
        {
            nav1:[{link:'/signup',name:'SIGN UP'},{link:'/signin',name:'SIGN IN'}]
        }); 
});
signinRouter.get('/done',function(req,res){
    const uname = req.query.uname;
    const upsw = req.query.psw;
    // detdata.find({name:uname,psw:upsw})
    // .then(function(){
    //     res.redirect('/books');
    // })
    detdata.findOne({name:uname,psw:upsw}, function(err, result) {
        // if (err) return reject(err); alert("error");
        if (result) res.redirect('/books');// enter your correct username and password
        else res.redirect('/signin');
      });
    
});
module.exports = signinRouter;