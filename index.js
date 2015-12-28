const connectionManager = require('./db/connection/connectionManager');
const Vehicle = require('./db/schema/vehicle');

exports.connectionManager = connectionManager;
exports.schema = { Vehicle : Vehicle };