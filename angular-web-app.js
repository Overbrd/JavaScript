/**
 * Main AngularJS Web Application
 */
var app = angular.module('AppName', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "URL.php", controller: "PageCtrl"})
    // Pages
    .when("/nameoffilewithoutextension", {templateUrl: "URL.php", controller: "PageCtrl"})
    .when("/nameoffilewithoutextension", {templateUrl: "URL.php", controller: "PageCtrl"})
    .when("/nameoffilewithoutextension", {templateUrl: "URL.php", controller: "PageCtrl"})
    .when("/nameoffilewithoutextension", {templateUrl: "URL.php", controller: "PageCtrl"})
    .when("/nameoffilewithoutextension", {templateUrl: "URL.php", controller: "PageCtrl"})
    // Blog
    .when("/nameoffilewithoutextension", {templateUrl: "URL.php", controller: "BlogCtrl"})
    .when("/directory/nameoffilewithoutextension", {templateUrl: "URL.php", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "404URL.php", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});