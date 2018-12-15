const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username : String,
    password : String,
    email : String,
    date : { type : Date, default : Date.now }
});


const User = mongoose.model('User', UserSchema);

module.exports = User;