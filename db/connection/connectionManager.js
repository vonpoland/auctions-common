const mongoose = require('mongoose');

var connections = {};

exports.create = function (options, callback) {
	if (connections[options.name]) {
		return;
	}

	var connection = connections[options.name] = mongoose.createConnection(options.connectionString);

	connection.on('error', (err) => {
		console.info(err);
		callback(err);
	});

	connection.once('open', () => {
		callback(null, connection);
	});

	return connection;
};