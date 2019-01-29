app.controller('MainController', ['$scope', '$rootScope', '$http', '$location', '$interval', function($scope, $rootScope, $http, $location, $interval) {

	$scope.tickers = [];
	$scope.everySeconds = 5;

	$scope.callMercadoBitcoinAPI = function(){
		$http({
	        method: 'GET',
	        url: 'https://www.mercadobitcoin.net/api/BTC/ticker/',
	        headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
	    }).success(function(data) {
	    	$scope.tickers.push(data);
		});		
	}

	$interval(function(){$scope.callMercadoBitcoinAPI();}, $scope.everySeconds * 1000);
}]);