console.log('ANSWER CONTROLLER IS ON!');
require('../config/mongoose');
var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

function AnswerController(){
  this.create = function(req,res){
    console.log("THIS IS ANSWER REQ BODY: ", req.body);
    var answer = new Answer({
      _userId:req.body.userId,
      answer: req.body.new_answer.answer,
      detail: req.body.new_answer.detail,
      like_count: 0,
      _question: req.body.questionId
    });
    answer.save(function(err,answer) {
      if(err){
        console.log("ERR** ANSWER is NOT CREATED!");
      } else {
        // console.log('this is topicId!!!!!!',req.body.topicId);
        Question.findOne({_id:req.body.questionId},function(err,question){
          console.log("ANSWER-CONT-question ::::::", err, question);
          question._answers.push(answer._id);
          question.save(function(err,data){
            // console.log('CREATE_ANSWER_DATA:::::',data);
            res.json({placeholder:'create_answer', answer:answer});
          })
        })
      }
    })
  }
  this.index = function(req,res){
    // console.log(req.params);
    Question.findOne({ _id:req.params.questionId }).exec(function(err, answers) {
      // console.log(question);
      // console.log('answers::::',answers);
      res.json({placeholder:'index_answer', answers:answers});
    })
  }
  this.addLikeCount = function(req,res){
    Answer.findOne({_id:req.body.answerId},function(err, answer){
      // console.log("ANSWER-like COUNT ::::::", err, answer);
      // do this when you did not make model for like and dislike in the beginning.
      answer.like_count = answer.like_count || 0;
      answer.like_count++;
      answer.save(function(err,data){
        // console.log('CREATE_ANSWER_DATA:::::',data);
        res.json({placeholder:'add_like_count', answer:data});
      })
    })
  }
}


module.exports = new AnswerController();
