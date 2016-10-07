var myApp = angular.module('myApp', ['ui.router']);
// code for config
myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/index.html");
  $stateProvider
  .state('index',{
    url: '/index.html'
  })
    .state('content', 
    {
      url: '/display/:key',
      views: {
    '': {
      templateUrl: 'display.html',
      controller: 'myController'

    }}
    })
    
  });
// code inside myController
myApp.controller('myController',['$scope','$http','$stateParams','$location',function($scope,$http,$stateParams,$location){
	$scope.json_data;
  // code for getting json data
	$http.get('js/data.json').success(function(response){ 
		$scope.json_data=response;
		var param=$stateParams.key;
   if(param!=undefined){
      $scope.place_title=response.placedetails[param].name;
      $scope.place_url=response.placedetails[param].url;
      $scope.palce_des=response.placedetails[param].description;
   }	

		});
}]);

