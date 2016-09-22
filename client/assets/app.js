var app = angular.module('app', ['ngRoute', 'ngMessages', 'ngCookies']);


app.config(function ($routeProvider) {
  $routeProvider
  .when('/index',{
    templateUrl: 'partials/loginAndRegi.html',
    controller: 'UserController'
  })
  .when('/',{
    templateUrl: 'partials/dashboard.html',
    controller: 'DashboardController'
  })
  .when('/new_question',{
    templateUrl: 'partials/new_question.html',
    controller: 'New_questionController'
  })
  .when('/question/:questionId/new_answer',{
    templateUrl: 'partials/new_answer.html',
    controller: 'New_answerController'
  })
  .when('/question/:questionId',{
    templateUrl: 'partials/question.html',
    controller: 'QuestionController'
  })
  .otherwise({
    redirectTo: '/'
  });
});
