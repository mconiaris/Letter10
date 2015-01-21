// create the module and name it scotchApp
var letterTen = angular.module('letterTen', ['ngRoute']);

// configure our routes
letterTen.config(function($routeProvider) {
  $routeProvider

    // route for the home page
    .when('/', {
      templateUrl : 'pages/home.html',
      controller  : 'mainController'
    })

    // route for the about page
    .when('/about', {
      templateUrl : 'pages/about.html',
      controller  : 'aboutController'
    })

    // route for the reels page
    .when('/reels', {
      templateUrl : 'pages/reels.html',
      controller  : 'aboutController'
    })

    // route for the contact page
    .when('/contact', {
      templateUrl : 'pages/contact.html',
      controller  : 'contactController'
    });
});

// create the controller and inject Angular's $scope
letterTen.controller('mainController', function($scope) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';
});

letterTen.controller('aboutController', function($scope) {
  $scope.message = 'Look! I am an about page.';
});

letterTen.controller('contactController', function($scope) {
  $scope.message = 'Contact us! JK. This is just a demo.';
});
