/*
	Create book.js in controllers directory. It will handle book views like Yii controller does.
*/

'use strict';

spaApp_book.config(['$routeProvider', function($routeProvider) {
  $routeProvider
	.when('/book/index', {
		templateUrl: 'views/book/index.html',
		controller: 'index'
	})
	.when('/book/create', {
		templateUrl: 'views/book/create.html',
		controller: 'create',
		resolve: {
			book: function(services, $route){
				return services.getBooks();
			}
        }
	})
	.when('/book/update/:bookId', {
		templateUrl: 'views/book/update.html',
		controller: 'update',
		resolve: {
          book: function(services, $route){
            var bookId = $route.current.params.bookId;
            return services.getBook(bookId);
          }
        }
	})
	.when('/book/delete/:bookId', {
		templateUrl: 'views/book/index.html',
		controller: 'delete',
	})
	.otherwise({
		redirectTo: '/book/index'
	});
}]);

spaApp_book.controller('index', ['$scope', '$http', 'services', 
	function($scope,$http,services) {
	$scope.message = 'List of Books!';
	services.getBooks().then(function(data){
        $scope.books = data.data;
    });	
	$scope.deleteBook = function(bookID) {
		if(confirm("Are you sure to delete this book number: " + bookID)==true && bookID>0){
			services.deleteBook(bookID);	
			$route.reload();
		}
	};
}])
.controller('create', ['$scope', '$http', 'services','$location','book', 
	function($scope,$http,services,$location,book) {
	$scope.message = 'Create a new Book!';
	$scope.createBook = function(book) {
        var results = services.createBook(book);
    }  
}])
.controller('update', ['$scope', '$http', '$routeParams', 'services','$location','book', 
	function($scope,$http,$routeParams,services,$location,book) {
	$scope.message = 'Update a Book!';
	var original = book.data;
	$scope.book = angular.copy(original);
	$scope.isClean = function() {
		return angular.equals(original, $scope.book);
	}
	$scope.updateBook = function(book) {	
        var results = services.updateBook(book);
    } 
}]);