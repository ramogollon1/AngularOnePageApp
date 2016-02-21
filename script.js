var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html',
			controller : 'mainController'
		})

		.when('/about', {
			templateUrl : 'pages/about.html',
			controller : 'aboutController'
		})

		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller : 'contactController'
		});
});



myApp.controller('mainController', function($scope) {
	$scope.message = 'This is the main page';
	console.log($scope);
});

myApp.controller('aboutController', function($scope) {
	$scope.message = "This is about page";
	console.log($scope);
});

myApp.controller('contactController', function($scope) {
	$scope.message = "This is contact page";
	console.log($scope);
});


