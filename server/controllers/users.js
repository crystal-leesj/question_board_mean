console.log('USERS CONTROLLER IS ON!');
require('../config/mongoose');
var mongoose = require('mongoose');
var User = mongoose.model('User');

function UsersController(){

  this.register = function(req,res){
    console.log("CHECK::::",req.body);
    var user = new User({
      name:{
        first:req.body.first_name,
        last:req.body.last_name,
      },
      email: req.body.email,
      password: req.body.password,
      birthday: req.body.birthday,
    });
    user.save(function(err,new_user) {
      if(err){
        console.log("something went wrong!",err);
        if (err.code = 11000){
          res.json({placeholder:'error', message:"Email address is already in use!"});
        }
        // if (err){
        //   res.json({placeholder:'error', message:"Password is not match!"});
        // }
      } else {
        res.json({placeholder:'register', user:new_user});
      }
    })
  };

  this.login = function(req,res){
    User.findOne({email:req.body.email},function(err, user){
      console.log('What is ERR?????',err, 'What is USER?????',user);
      // err and user are null. that is why i use !user(false false)
      if (!user){
        res.json({placeholder:'error', message:"Email is not found!"});
      }
      else if (user.validPassword(req.body.password)){
        res.json({placeholder:'login', user:user});
      }
      else {
        res.json({placeholder:'error', message:"Password does not match!"});
      }
    })
  }
}


module.exports = new UsersController();
