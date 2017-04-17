angular.module('alurapic').controller('TransacoesController', function($scope, recursoTransacao) {
	
	$scope.transacoes = [];
	$scope.mensagem = '';

	recursoTransacao.query(function(transacoes) {
		$scope.transacoes = transacoes;
	}, function(erro) {
		console.log(erro);
	});

	$scope.mes = 3;

	$scope.trocarMes = function(mes){
		$scope.mes = mes;
	}

	// $scope.remover = function(foto) {

	// 	recursoFoto.delete({fotoId: foto._id}, function() {
	// 		var indiceDaFoto = $scope.fotos.indexOf(foto);
	// 		$scope.fotos.splice(indiceDaFoto, 1);
	// 		$scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
	// 	}, function(erro) {
	// 		console.log(erro);
	// 		$scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
	// 	});
	// };

});