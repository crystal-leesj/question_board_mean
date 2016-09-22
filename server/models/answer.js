console.log('ANSWERS MODEL IS ON!');

var mongoose = require('mongoose');
var bcrypt   = require('bcrypt');
var Schema = mongoose.Schema;

var answerSchema = new Schema({
  answer: String,
  detail: String,
  like_count: Number,
  _userId: {type: Schema.Types.ObjectId, ref: 'User'},
  _questionId: {type: Schema.Types.ObjectId, ref: 'Question'},
}, {
  timestamps: {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
  }
});

mongoose.model('Answer', answerSchema);
