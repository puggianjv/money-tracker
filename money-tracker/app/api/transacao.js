var mongoose = require('mongoose');

var api = {};
var model = mongoose.model('Transacao');

api.lista = function(req, res){

	model.find({})
		.then(function(transacoes){
			res.json(transacoes);
		}, function(error){
			console.log(error);
			res.status(500).json(error);
		});

};

api.buscaPorId = function(req, res){

	model
		.findById(req.params.id)
		.then(function(transacao){
			if(!transacao) throw Error('Transacao não encontrada');
			res.json(transacao);
		}, function(error){
			console.log(error);
			res.status(404).json(error);
		});

}

api.removePorId = function(req, res){

	model
		.remove({_id: req.params.id})
		.then(function(){
			res.sendStatus(204);
		}, function(error){
			console.log(error);
			res.status(404).json(error);
		});

}

api.adiciona = function(req, res){

	model
		.create(req.body)
		.then(function(transacao){
			res.json(transacao);
		}, function(error){
			console.log(error);
			res.status(500).json(error);
		});

}

api.atualiza = function(req, res){

	model
		.findByIdAndUpdate(req.params.id, req.body)
		.then(function(transacao){
			res.json(transacao);
		}, function(error){
			console.log(error);
			res.status(500).json(error);
		});

}

api.buscaEntreDatas = function(req, res){

	var ano = req.params.ano;
	var mes = req.params.mes;
	var mesSeguinte;
	var anoSeguinte;

	if(mes == 12){
		mesSeguinte = 1;
		anoSeguinte = Number(ano) + 1;
	}else{
		mesSeguinte = Number(mes) + 1;
		anoSeguinte = ano;
	}

	mes = mesToString(mes);
	mesSeguinte = mesToString(mesSeguinte);

	model
		.find({
			data: {
				$gte: new Date(ano + "-" + mes + "-01T00:00:00.000Z"),
				$lt: new Date(anoSeguinte + "-" + mesSeguinte + "-01T00:00:00.000Z")
			}
		})
		.then(function(transacoes){
			res.json(transacoes);
		}, function(error){
			console.log(error);
			res.status(500).json(error);
		});



}

function mesToString(mes){
	if(mes < 10){
		mes = "0" + mes;
	}
	return "" + mes;
}

module.exports = api;