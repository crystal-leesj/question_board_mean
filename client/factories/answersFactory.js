app.factory('answersFactory', ['$http', function($http){
  var factory = {};
  factory.create = function(userId, question_id, new_answer, callback){
    console.log('all the params', userId, question_id, new_answer);
    $http.post('/answers', {userId: userId, questionId:question_id, new_answer: new_answer}).then(function(data){
      if (typeof(callback) == 'function'){
        callback(data.data.answer);
      }
    })
  }
  factory.addLikeCount = function(answerId, callback){
    $http.post('/answers/like', {answerId:answerId})
    .then(function(data){
      callback(data.data.answer);
    })
  }
  return factory;
}]);
