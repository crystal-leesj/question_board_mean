app.factory('questionsFactory', ['$http', function($http){
  var factory = {};
  factory.create = function(userId, new_question, callback){
    // console.log("factory-userID::",userId, new_question);
    $http.post('/questions', {userId: userId, new_question: new_question}).then(function(data){
      console.log('check data::::::',data);
      if (typeof(callback) == 'function'){
        callback(data.data.question);
      }
    })
  }
  factory.index = function(callback){
    $http.get('/questions').then(function(data){
      callback(data.data.questions)
    })
  }
  factory.show = function(questionId, callback){
    $http.get('/questions/'+questionId).then(function(data){
      callback(data.data.question)
    })
  }
  return factory;
}]);
