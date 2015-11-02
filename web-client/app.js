'use strict';

// adjust to the your url of web service
// add global JavaScript varable serviceBase that refers to your Yii 2.0 web service
// afterward, we will use a web service look like: http://localhost/angularjs-yii2-full/web-service/web/books
var serviceBase = 'http://localhost/angularjs-yii2-full/web-service/web/'

// Declare app level main module (app.js) which depends on views, and components
var spaApp = angular.module('spaApp', [
  'ngRoute',
  'spaApp.site',
  'spaApp.book',
  'ngAnimate' // add module ngAnimate
]);

// Declare sub modules (book.js, site.js, ...). Hereby, main module is intended to control other scripts such as sub module
var spaApp_site = angular.module('spaApp.site', ['ngRoute'])
var spaApp_book = angular.module('spaApp.book', ['ngRoute']);

spaApp.config(['$routeProvider', function($routeProvider) {

  	// config default route /site/index. This route will handled by spaApp.site sub module
	$routeProvider.otherwise({redirectTo: '/site/index'});
}]);

// by default AngularJS attaches information about binding and scopes to DOM nodes, and adds CSS classes to data-bound elements,
// but we can disable this in production for a significant performance boost with:
spaApp.config(['$compileProvider', function ($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
}]);