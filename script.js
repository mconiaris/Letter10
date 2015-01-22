  // create the module and name it letterTen
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

      // route for the about page
      .when('/reels', {
        templateUrl : 'pages/reels.html',
        controller  : 'reelsController'
      })

      // route for the contact page
      .when('/contact', {
        templateUrl : 'pages/contact.html',
        controller  : 'contactController'
      })

      .otherwise({
        redirectTo: '/'
      });
  });

  // create the controller and inject Angular's $scope
  letterTen.controller('mainController', function($scope) {
    // create a message to display in our view
    console.log("Launched home page.")
  });

  letterTen.controller('aboutController', function($scope) {
    $scope.message = 'About Us';
    console.log("Launched About page");
  });

  letterTen.controller('reelsController', function($scope) {
    $scope.message = 'Our Reels';
    console.log("Launched Reels page");
  });

  letterTen.controller('contactController', function($scope) {
    $scope.message = 'Contact Us';
    console.log("Launched Contact page.")
  });
