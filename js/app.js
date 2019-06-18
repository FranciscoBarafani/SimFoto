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

.when('/sobre', {
  templateUrl : '/sobre.html',
  controller : 'sobre'
  })

.when('/ejercicio1', {
templateUrl : '/ejercicio1.html',
controller : 'ejercicios'
})

.when('/tpcomposicion', {
  templateUrl : '/tpcomposicion.html',
  controller : 'ejercicios'
  })

.when('/tpencuadre', {
  templateUrl : '/tpencuadre.html',
  controller : 'ejercicios'
  })  

.when('/tutorial', {
  templateUrl : '/tutorial.html',
  controller : 'tutorial'
  })

.when('/modolibre', {
templateUrl : '/modolibre.html',
controller : 'modolibre'
})

.when('/teorico', {
  templateUrl : '/teorico.html',
  controller : 'teorico'
  })


.otherwise({redirectTo: '/'});
});

//CONTROLLERS
myApp.controller('index', function($scope) {
  });
myApp.controller('inicio', function($scope) {
  });   
myApp.controller('ejercicios', function($scope) {
  });     
myApp.controller('modolibre', function($scope) {
  });
myApp.controller('teorico', function($scope) {
  });
myApp.controller('teorico', function($scope) {           
 });
 myApp.controller('sobre', function($scope) {           
});