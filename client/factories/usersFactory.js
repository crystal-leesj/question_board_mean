app.factory('usersFactory', ['$http', function($http){
  var factory = {};
  factory.create = function(new_user,callback){
    $http.post('/register',new_user).then(function(data){
      console.log('DATA::::::::::',data);
      var err = false;
      var message = '';
      if (data.data.placeholder == 'error'){
        err = true;
        message = data.data.message;
      }
      if (typeof(callback) == 'function'){
        callback(err, data.data.user, message);
      }
    })
  }
  factory.login = function(user, callback){
    $http.post('/login', user).then(function(data){
      var err = false;
      var message = '';
      if (data.data.placeholder == 'error'){
        err = true;
        message = data.data.message;
      }
      if (typeof(callback) == 'function'){
        callback(err, data.data.user, message);
      }
    })
  }
  // factory.getUserName = function(userId, callback){
  //   $http.get('/users/'+userId).then(function(data){
  //     console.log('getUserName::::',data);
  //     callback(data.data.username);
  //   })
  // }
  return factory;
}]);
