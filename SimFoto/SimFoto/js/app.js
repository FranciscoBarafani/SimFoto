var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
  }]);
//ROUTE PROVIDER
myApp.config(function($routeProvider) {
$routeProvider

.when('/', {
  templateUrl : '/inicio.html',
  controller : 'inicio'
  })

.when('/ejercicios', {
templateUrl : '/ejercicios.html',
controller : 'ejercicios'
})

.when('/modolibre', {
templateUrl : '/modolibre.html',
controller : 'modolibre'
})

.otherwise({redirectTo: '/'});
});

//CONTROLLERS
myApp.controller('index', function($scope) {
    $scope.message = 'Hello from FirstController';
    });

myApp.controller('inicio', function($scope) {
    $scope.message = 'Hello from FirstController';
    });
    
myApp.controller('ejercicios', function($scope) {
  $scope.message = 'Hello from SecondController';
      });
      
myApp.controller('modolibre', function($scope) {
  $scope.message = 'Hello from ThirdController';
      });
    