var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var User = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

var jsonParser = bodyParser.json();

router.post('/', jsonParser ,(req, res, next) => {

  // console.log(req);
  // console.log(req.body);

  bcrypt.hash(req.body.password, saltRounds, (err, pass) => {
    if(err)
      console.log("Error in hashing password");
    else
     { 
        console.log("REACHED HERE");
        var encryptedPass = pass;
        console.log("ENCRYPTTED" + encryptedPass);
        var newUser = new User({
          username : req.body.username,
          email : req.body.email,
          mobile : req.body.contact,
          password : encryptedPass
        });
        console.log(newUser.password);
        newUser.save(function(err){
          console.log("User Saved");
        });
      
        res.send(JSON.stringify({
          success : true,
          message : 'Registeration successful'
        }));
      }  
});
});

module.exports = router;
