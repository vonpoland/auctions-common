var Vehicle = {
    originalId: 'string',
    objectId: 'string',
    objectIdShort: 'string',
    manufacturer: 'string',
    model: 'string',
    vehicleType: 'number',
    location: 'number',
    body: 'string',
    engineType: 'number',
    engineCapacity: 'string',
    enginePower: 'string',
    color: 'string',
    mileage: 'string',
    firstRegistration: 'date',
    bidPeriodOriginal: 'date',
    totalRepairCost: 'string',
    created: 'date',
    replacementValue: 'string',
    picturesSaved: {type: 'boolean', default: false},
    votes: [{
        price: {type: 'number', required: true},
        status: {type: 'string', enum: ['registered', 'proposed', 'won'], default: 'registered', required: true},
        userId: {type: 'objectId', required: true, ref: 'User'},
        date: {type: 'date', required: true},
        won: 'boolean'
    }],
    pictures: [
        {
            'name': 'string',
            'title': 'string',
            'id': 'number'
        }]
};

module.exports = Vehicle;