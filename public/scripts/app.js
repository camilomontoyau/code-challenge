var myApp = angular.module('gistApp', ['ngRoute','ui.router'])
.config(function($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider){
	$httpProvider.defaults.withCredentials = true;
	$urlRouterProvider.otherwise("/");
	$stateProvider.state("home", {
    url: "/",
    templateUrl: "partials/home.html",
    controller: "allgistsCtrl",
    controllerAs:"gists"
  }).state("gist", {
    url: "/gists/{id}",
    templateUrl: "partials/gist.html",
    controller: "gistCtrl",
    controllerAs:"gist"
  });
});

	

