'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('MyCtrl1', ['$http', '$scope', function( $http, $scope ) {
		
		$http({method: 'GET', url: BASE_URL + CURRENT_ISSUE_NUMBER_PATH})
		.success(function(data, status, headers, config) {
	    // this callback will be called asynchronously
	    // when the response is available
	
	    console.log("success() callback");
	    console.log(data);
	    console.log(status);
	    console.log(headers);
	    console.log(config);
	    
			$scope.current_issue_number = data[0].issue;
			console.log($scope.current_issue_number);
			
			$scope.number_of_issues_array = [];
			for (var i = 0; i < $scope.current_issue_number; i++) {
				$scope.number_of_issues_array.push( { "id" : i+1 });
			}
			
			console.log($scope.number_of_issues_array);
			console.log($scope.number_of_issues_array.length);

			
	  })
	  .error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	    
	    console.log("error() callback");
	    console.log(data);
	    console.log(status);
	    console.log(headers);
	    console.log(config);
	
	  });
	  
			$scope.myInterval = -1;
			var slides = $scope.slides = [];
			$scope.addSlide = function() {
			var newWidth = 200 + ((slides.length + (25 * slides.length)) % 150);
			slides.push({
			  image: 'http://placekitten.com/' + newWidth + '/200',
			  text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
			    ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
			});
			};
			for (var i=0; i<4; i++) {
				$scope.addSlide();
			}


  }]);