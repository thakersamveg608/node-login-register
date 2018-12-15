var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/create', (req, res, next) => {
  var newUser = new User({
    username : "ABCD",
    password : "abcd",
    email : "abcd"
  });

  newUser.save(function(err){
    console.log("User Saved");
  });

res.send("User created!");

});

module.exports = router;
