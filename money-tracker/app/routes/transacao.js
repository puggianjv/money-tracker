module.exports = function(app){
	var api = app.api.transacao;

	app.route('/v1/transacoes')
		.get(api.lista)
		.post(api.adiciona);

	app.route('/v1/transacoes/:id')
		.get(api.buscaPorId)
		.delete(api.removePorId)
		.put(api.atualiza);

	app.get('/v1/transacoes/busca/:ano/:mes', api.buscaEntreDatas);
}