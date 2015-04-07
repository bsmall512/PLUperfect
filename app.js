var myApp = angular.module('myApp', ['ngResource'])


myApp.controller('mainController', ['$scope', function($scope){
	$scope.userGuess = '';
	$scope.produce = [{name: "granny smith apple", code: "4017", image: "src/images/granny_smith.jpeg"}]
    $scope.response = '';
    $scope.checkCodeGuess = function(){
    	// setting it to zero for rough draft!!!!!!!
    	if($scope.userGuess === $scope.produce[0].code){
    		$scope.response = "Correct"; 
    	}
    	else{
    		$scope.response = "Try Again";
    	}
    }
}]);

