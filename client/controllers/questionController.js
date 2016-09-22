app.controller('QuestionController',
  ['$scope', 'usersFactory', 'questionsFactory', 'answersFactory','$routeParams', '$location', '$cookies',
  function ($scope, usersFactory, questionsFactory, answersFactory, $routeParams, $location, $cookies){

  var username = $cookies.get('username');
  if (username){
    $scope.username = username;
  } else {
    $location.url('/index');
  }

  $scope.logout = function(){
    $cookies.remove('username');
    $cookies.remove('userId');
    $location.url('/index');
  }

  $scope.userId = $cookies.get('userId');
  var userId = $cookies.get('userId');

  getQuestion();

  function getQuestion(){
    questionsFactory.show($routeParams.questionId,function(question){
      console.log('get one question:::',question);
      $scope.question = question;
    });
  };


  $scope.clickLike = function(answerId){
    answersFactory.addLikeCount(answerId, function(){
      getQuestion();
    })
  }
}])
