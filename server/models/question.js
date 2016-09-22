console.log('QUESTIONS MODEL IS ON!');

var mongoose = require('mongoose');
var bcrypt   = require('bcrypt');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
  question: String,
  description: String,
  _answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
  _userId: {type: Schema.Types.ObjectId, ref: 'User'},
}, {
  timestamps: {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
  }
});

mongoose.model('Question', questionSchema);
