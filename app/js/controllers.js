'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('MyCtrl1', ['$http', '$scope', function( $http, $scope ) {
		
		$http({method: 'GET', url: BASE_URL + CURRENT_ISSUE_NUMBER_PATH})
		.success(function(data, status, headers, config) {
	    // this callback will be called asynchronously
	    // when the response is available
	
	    console.log("success() callback");
			logHttpData(data, status, headers, config);
	    
			var currentIssueNumber = $scope.current_issue_number = data.results[0].current_number;
			console.log($scope.current_issue_number);

			/* CAROUSEL */
			$scope.myInterval = -1;
			var slides = $scope.slides = [];
			$scope.addSlide = function() {
				slides.push({
				  cover_id: slides.length + 1
				});
			};
			for (var i = 0; i < currentIssueNumber; i++) {
				$scope.addSlide();
			}
			// reverse the order of slides[] so the latest cover is shown first
			slides.reverse();
			console.log(slides);

	  })
	  .error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	    
	    console.log("error() callback");
			logHttpData(data, status, headers, config);
	
	  });
  }]);
  
  
  
function logHttpData (data, status, headers, config) {
/*
  	console.log("logHttpData()");
  	console.log(data);
  	console.log(status);
  	console.log(headers());
  	console.log(config);
*/
}
