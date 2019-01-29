var app = angular.module('MercadoBitcoinAPI', []);

app.config(['$locationProvider', 
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
		$locationProvider.html5Mode({
		    enabled: true
		});
}]);

