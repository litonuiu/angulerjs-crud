var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope){
	console.log('In my controller...');

	$scope.newUser = {};
	$scope.selectedUser = {};
	$scope.message = "";

	$scope.users = [
		{username: 'liton', fullName: 'Md. Liton Miah', email: 'liton@y.com'},
		{username: 'don', fullName: 'Md. Agibul Hasan', email: 'don@y.com'},
		{username: 'sohel', fullName: 'Md. Sohel Mahmud', email: 'sohel@y.com'}
	];

	$scope.saveUser = function(){
		$scope.users.push($scope.newUser);
		$scope.newUser = {};
		$scope.message = "New User Added Successfully.";
	};

	$scope.selectUser = function(user){
		console.log(user);
		$scope.selectedUser = user;
	};

	$scope.updateUser = function(){
		$scope.message = "User Info Updated Successfully.";
	};

	$scope.deleteUser = function(){
		$scope.users.splice($scope.users.indexOf($scope.selectedUser), 1);
		$scope.message = "User Info Deleted Successfully.";
	};

	$scope.clearMessage = function(){
		$scope.message = "";
	};
});