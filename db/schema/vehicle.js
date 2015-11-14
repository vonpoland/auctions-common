var Vehicle = {
	originalId: 'string',
	objectId: 'string',
	objectIdShort: 'string',
	manufacturer: 'string',
	model: 'string',
	vehicleType: 'string',
	body: 'string',
	engineType: 'string',
	engineCapacity: 'string',
	enginePower: 'string',
	color: 'string',
	mileage: 'string',
	firstRegistrationDate: 'string',
	bidPeriodOriginalDate: 'date',
	totalRepairCost: 'string',
	replacementValue: 'string',
	picturesSaved: { type: 'boolean', default: false },
	pictures: [
		{
			'name': 'string',
			'title': 'string',
			'id': 'number'
		}]
};

module.exports = Vehicle;