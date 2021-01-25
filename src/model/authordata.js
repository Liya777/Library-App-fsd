const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user1:user1@liya-files.c0nzy.mongodb.net/libraryapp?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const authorSchema = new Schema({
    author: String,
    born: String,
    genre: String,
    more: String,
    img: String
});
var authordata = mongoose.model('authordata',authorSchema);
module.exports=authordata;