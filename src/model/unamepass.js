const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/library');
mongoose.connect('mongodb+srv://user1:user1@liya-files.c0nzy.mongodb.net/libraryapp?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const detSchema = new Schema({
    name: String,
    psw: String
});
var detdata = mongoose.model('detdata',detSchema);
module.exports=detdata;