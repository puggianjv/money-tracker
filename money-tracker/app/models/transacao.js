var mongoose = require('mongoose');

var schema = mongoose.Schema({
	preco: {
		type: Number,
		required: true
	},
	descricao: {
		type: String,
		required: false
	},
	data: {
		type: Date,
		required:true
	}
});

mongoose.model('Transacao', schema, 'transacoes');