app.controller('New_answerController',
  ['$scope', 'usersFactory', 'questionsFactory', 'answersFactory', '$routeParams', '$location', '$cookies',
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

  questionsFactory.show($routeParams.questionId,function(question){
    console.log('get one question:::',question);
    question._answers.reverse();
    $scope.question = question;
  });

  $scope.userId = $cookies.get('userId');
  var userId = $cookies.get('userId');

  $scope.postAnswer = function(userId, question_id, answer){
    answersFactory.create(userId, question_id, answer, function(){
      $scope.new_answer = "";
      $location.url('/dashboard');
    });
  }

}])
