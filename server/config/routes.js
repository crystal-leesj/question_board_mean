console.log('ROUTES ARE ON!');
var users = require('../controllers/users');
var questions = require('../controllers/questions');
var answers = require('../controllers/answers');

module.exports = function(app){
  app.post('/login', users.login);
  app.post('/register', users.register);
  app.get('/questions', questions.index);
  app.post('/questions', questions.create);
  app.get('/questions/:questionId',questions.show);
  app.get('/answers', answers.index);
  app.post('/answers', answers.create);
  app.post('/answers/like', answers.addLikeCount);
}
