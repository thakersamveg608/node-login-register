var myFunctions = require('../app');
var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var router = express.Router();
const bcrypt = require('bcrypt');

var User = mongoose.model('User');
var jsonParser = bodyParser.json();

router.post('/', jsonParser, (req, res, next) => {
    // console.log(req.body);
    console.log(req);
    User.find({'username' : req.body.username}, 'password', (err, user) => {
        if(err)
            console.log("Error in accessing DB");
        else{
            console.log(user);
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                console.log(result);
                if(result){
                    console.log("true hai");
                    res.send(JSON.stringify({
                        success : true,
                        message : "User successfully logged in"
                    }));
                }
                else{
                    console.log("false hai");
                    res.send(JSON.stringify({
                        success : false,
                        message : "Invalid password"
                    }));
                }
            })
        }
    });
});

module.exports = router;