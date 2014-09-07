angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('SearchCtrl', function($scope) {
	
})


.controller('SearchDetailCtrl', function($scope,$stateParams,Friends) {
	$scope.getImage = function getImage() {
			navigator.camera.getPicture(onSuccess, onFailure, {
				destinationType: navigator.camera.DestinationType.FILE_URI,
				sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
			});
			};
	$scope.onSuccess = function onSuccess(imageURI) {
			alert("Image location is:"+ imageURI);
		};
	$scope.onFailure = function onFailure(message) {
			alert("Get image failed: " + message);
		};
})

