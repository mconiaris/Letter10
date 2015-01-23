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

      // route for the profiles page
      .when('/profiles', {
        templateUrl : 'pages/profiles.html',
        controller  : 'profilesController'
      })

      // route for the originals page
      .when('/originals', {
        templateUrl : 'pages/originals.html',
        controller  : 'originalsController'
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

  letterTen.controller('profilesController', function($scope) {
    $scope.message = 'Profiles';
    console.log("Launched Profiles page");
  });

  letterTen.controller('originalsController', function($scope) {
    $scope.message = 'Originals';
    console.log("Launched Originals page");
  });

  letterTen.controller('contactController', function($scope) {
    $scope.message = 'Contact Us';
    console.log("Launched Contact page.")
  });
