angular.module('alurapic')
.controller('LoginController', function($scope, $http, $location){

	$scope.usuario = {}
	$scope.mensagem = '';

	$scope.autenticar = function(){
		var usuario = $scope.usuario;

		$http.post('/autenticar',
			{login: usuario.login, senha: usuario.senha})
			.then(function(){
				$location.path('/');
				console.log('autenticando ' + usuario.login);
			}, function(error){
				console.log(error);
				$scope.mensagem = 'Login e/ou senha inválido(s).'
			});
		
	}



});