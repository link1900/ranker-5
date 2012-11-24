var app = angular.module('core', ['mongolabResource']).config(function($routeProvider) {
	$routeProvider.when('/', {
		controller : RankingsCtrl,
		templateUrl : 'rankings.html'
	}).when('/greyhound', {
		controller : GreyhoundCtrl,
		templateUrl : 'greyhound.html'
	}).when('/race', {
		controller : RaceCtrl,
		templateUrl : 'race.html'
	}).when('/todo', {
		controller : AdminCtrl,
		templateUrl : 'todo.html'
	}).when('/admin', {
		controller : AdminCtrl,
		templateUrl : 'admin.html'
	}).otherwise({
		redirectTo : '/'
	});
});

app.constant('API_KEY', '50acb83ee4b0df68c47a0e3b');
app.constant('DB_NAME', 'agra');

app.factory('GreyhoundDao', function($mongolabResource) {
    return $mongolabResource('greyhounds');
});

app.factory('RaceDao', function($mongolabResource) {
    return $mongolabResource('races');
});

function RankingsCtrl($scope){
	$scope.rankings = [];
}

function GreyhoundCtrl($scope,GreyhoundDao) {
	$scope.greyhounds = GreyhoundDao.query();
}

function RaceCtrl($scope,RaceDao) {
	$scope.races = RaceDao.query();
}

function AdminCtrl($scope, GreyhoundDao){
	$scope.addGreyhounds = function(){
		
	}
}
