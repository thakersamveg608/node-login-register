var myFunctions = require('../app');
var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
const bcrypt = require('bcrypt');

var User = mongoose.model('User');

router.post('/login', (req, res, next) => {
    User.find({'username' : req.param('username')}, 'password', (err, user) => {
        if(err)
            console.log("Error in accessing DB");
        else{
            if(user.password === req.param('password')){
                res.send(JSON.stringify({
                    success : true,
                    message : "User successfully logged in"
                }))
            }
            else{
                res.send(JSON.stringify({
                    success : false,
                    message : "Invalid password"
                }))
            }
        }
    });
});

module.exports = router;