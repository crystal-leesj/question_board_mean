console.log('QUESTIONS CONTROLLER IS ON!');
require('../config/mongoose');
var mongoose = require('mongoose');

var Question = mongoose.model('Question');

function QuestionsController(){
  this.create = function(req,res){
    console.log("THIS IS QUESION REQ BODY: ", req.body);
    var question = new Question({
      _userId:req.body.userId,
      question: req.body.new_question.question,
      description:req.body.new_question.description,
    });
    question.save(function(err,question){
      if(err){
        console.log("ERR** QUESTION is NOT CREATED!");
      } else {
        res.json({placeholder:'create_question', question:question});
      }
    })
  }
  this.index = function(req,res){
    Question.find({}).populate('_userId').exec(function(err, questions) {
      if(err){
        console.log("ERR** INDEX_QUESTION::::", err);
        res.json({placeholder:'error', message:'CANNOT display all QUESTIONS'});
      } else {
        res.json({placeholder:'index_question', questions:questions});
      }
    })
  }
  this.show = function(req,res){
    Question.findOne({_id:req.params.questionId})
    .populate('_userId')
    .populate({
      path: '_userId _answers',
      populate: {
        path: '_userId'
      }
    })
    .exec(function(err, question){
      // console.log('server-show-question:::::',question);
      if(err){
        console.log("ERR** SHOW_QUESTION::::", err);
        res.json({placeholder:'error', message:'CANNOT SHOW A QUESTION'})
      } else {
        res.json({placeholder:'show_question', question:question});
      }
    })
  }

}


module.exports = new QuestionsController();
