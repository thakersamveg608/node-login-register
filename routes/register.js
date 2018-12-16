var express = require('express');
var router = express.Router();
var User = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var encryptedPass = '';

router.post('/register', (req, res, next) => {
  bcrypt.hash(req.param('password'), saltRounds, (err, pass) => {
    if(err)
      console.log("Error in hashing password");
    else
      encryptedPass = pass;
  });
  var newUser = new User({
    username : req.param('username'),
    email : req.param('email'),
    mobile : req.param('contact'),
    password : encryptedPass
  });
  newUser.save(function(err){
    console.log("User Saved");
  });

  res.send(JSON.stringify({
    success : true,
    message : 'Registeration successful'
  }));

});

module.exports = router;
