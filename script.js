// create the module and name it scotchApp
var letterTen = angular.module('letterTen', ['ngRoute']).controller('mainController', ['$scope', function($scope) {
    $scope.templates =
      [ { name: 'home', url: 'pages/home.html'},
        { name: 'about', url: 'pages/about.html'},
        { name: 'reels', url: 'pages/reels.html'},
        { name: 'contact', url: 'pages/contact.html'} ];
    $scope.template = $scope.templates[0];
  }]);
