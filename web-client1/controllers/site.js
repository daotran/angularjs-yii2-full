/*
	site.js: This file is sub module to handle site views. It is very similar to Yii's SiteController.
*/

'use strict';

spaApp_site.config(['$routeProvider', function($routeProvider) {
  $routeProvider
	.when('/site/index', {
		templateUrl: 'views/site/index.html',
		controller: 'IndexController'
	})
	.when('/site/about', {
		templateUrl: 'views/site/about.html',
		controller: 'AboutController'
	})
	.when('/site/contact', {
		templateUrl: 'views/site/contact.html',
		controller: 'ContactController'
	})
	.otherwise({
		redirectTo: '/site/index'
	});
}])
.controller('IndexController', ['$scope', '$http', function($scope,$http) {
	// create a message to display in our view
	$scope.message = 'From this guide you will learn how to create single page application (SPA) in minutes using AngularJs and Yii Framework 2.0. The application will implement a Create Read Update Delete (CRUD) data processing. User interface of this application will be implemented using AngularJs. Data will be provided by API created using Yii Framework 2.0.';
}])
.controller('AboutController', ['$scope', '$http', function($scope,$http) {
	// create a message to display in our view
	$scope.message = 'Look! I am an about page.';
}])
.controller('ContactController', ['$scope', '$http', function($scope,$http) {
	// create a message to display in our view
	$scope.message = 'Contact us! JK. This is just a demo.';
}]);

/* Note: $scope is a scope that can be handled by the angular app in this case is all the tags under the tag which is marked with ng - app.
         $scope.message, message is variabel in file templateUrl, let say views/site/index.html, point to.
*/
