app.controller('DashboardController',
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

  getAll();

  function getAll() {
    questionsFactory.index(function(questions){
      console.log('Get all questions:::::',questions);
      $scope.questions = questions;
    })
  }

}])
