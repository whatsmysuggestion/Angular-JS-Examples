

(function(angular) {
  'use strict';
angular.module('TestApp', [])

.filter('reverse', function() {
	  
    return function(input) {       
      var out = '';
      for (var i = input.length-1; i>=0; i--) {
        out = out+input[i];
      }    
	  
      return out;
    };
  })
  
  .controller('TestController', ['$scope', function($scope) {
    $scope.data = 'whatsmysuggestion'; 
  }]);
  
})(window.angular);