var myApp = angular.module('myApp', ['ngResource'])


myApp.controller('mainController', ['$scope', function($scope){
	$scope.current = 0;
	$scope.userGuess = '';
	$scope.produce = [
	  {name: "granny smith apple", code: "4017", image: "src/images/granny_smith.jpeg"},
	  {name: "Honeycrisp Apple", code:"3283", image: "src/images/Honeycrisp_apple.jpg"}
    
	];
    $scope.response = '';
    $scope.checkCodeGuess = function(){
    	
    	if($scope.userGuess === $scope.produce[$scope.current].code){
    		$scope.response = "Correct"; 
    		if($scope.current < $scope.produce.length) {$scope.current++;}
    		else{$scope.current = 0;}
    		$scope.userGuess = '';
    		return true;
    	}
    	else{
    		$scope.response = "Try Again";
    		return false;
    	}
    	$scope.response = '';
    };
    $scope.setCurrent = function (){
      if($scope.checkCodeGuess) { $scope.current++;} 
      console.log('works');
    };
}]);

