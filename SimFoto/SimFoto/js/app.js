myApp = angular.module('myApp', ['ngRoute']);
myApp.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
  }]);
//ROUTE PROVIDER
myApp.config(function($routeProvider) {
$routeProvider

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
app.controller('index', function($scope) {
    $scope.message = 'Hello from FirstController';
    });
    
    app.controller('ejercicios', function($scope) {
    $scope.message = 'Hello from SecondController';
    });
    
    app.controller('modolibre', function($scope) {
    $scope.message = 'Hello from ThirdController';
    });
    