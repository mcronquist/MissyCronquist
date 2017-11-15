/**
 * Main AngularJS Web Application
 * @author Melissa Cronquist <mperkins321@gmail.com>
 */
var app = angular.module('tutorialWebApp', [
    'ngRoute'
  ]);
  
  /**
   * Configure the Routes
   */
  app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      // Home
      .when("/", {templateUrl: "partials/index.html", controller: "PageCtrl"})
      // Pages
      .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
      .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
      .when("/diy", {templateUrl: "partials/diy.html", controller: "PageCtrl"})
      .when("/recipes", {templateUrl: "partials/recipes.html", controller: "PageCtrl"})
      .when("/techcorner", {templateUrl: "partials/techcorner.html", controller: "PageCtrl"})
      .when("/travel", {templateUrl: "partials/travel.html", controller: "PageCtrl"})
      // Blog
      .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
      .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
      // else 404
      .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
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