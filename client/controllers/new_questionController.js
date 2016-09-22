app.controller('New_questionController',
  ['$scope', 'usersFactory', 'questionsFactory', '$location', '$cookies',
  function ($scope, usersFactory, questionsFactory, $location, $cookies){

  var username = $cookies.get('username');
  if (username){
    $scope.username = username;
  } else {
    $location.url('/index');
  }

  $scope.goBack = function(){
    $location.url('/');
  }
  $scope.logout = function(){
    $cookies.remove('username');
    $cookies.remove('userId');
    $location.url('/index');
  }

  var userId = $cookies.get('userId');

  $scope.postQuestion = function(){
    // console.log('controller-userId :::',userId);
    questionsFactory.create(userId, $scope.new_question, function(question){
      // console.log('userID:::::::',userId);
      $scope.new_question = "";
      $location.url('/dashboard');
    });
  }
}])
