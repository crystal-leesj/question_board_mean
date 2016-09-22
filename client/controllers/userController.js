app.controller('UserController', ['$scope', 'usersFactory', '$location', '$route', '$cookies',
                function ($scope, usersFactory, $location, $route, $cookies){
  $scope.userRegister = function(data){
    console.log(data);
    usersFactory.create($scope.registration,function(err, user, message){
      if (err){
        $scope.message = message;
      } else {
        $scope.registration = {};
        $cookies.put('username', user.name.first);
        $cookies.put('userId', user._id);
        $location.url('/dashboard');
      }
    });
  }

  $scope.userLogin = function(){
    console.log("!!!!!!!!!!!!!!!");
    usersFactory.login($scope.login,function(err, user, message){
      if (err){
        $scope.message = message;
      }else{
        $scope.login = {};
        $cookies.put('username', user.name.first);
        $cookies.put('userId', user._id);
        $location.url('/dashboard');
      }
    });
  }
}])
