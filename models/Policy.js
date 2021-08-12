const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Policy = new Schema({
    policy_id: {
        type: Number,
    },
    dop: {
        type: String,
    },
    customer_id: {
        type: Number,
    },
    fuel: {
        type: String,
    },
    vehicle_segment: {
        type: String,
    },
    premimum: {
        type: Number,
    },
    bodily_injury_liability: {
        type: Number,
    },
    personal_injury_protection: {
        type: String,
    },
    property_damage_liability: {
        type: String,
    },
    collisio: {
        type: String,
    },
    comprehensive: {
        type: String,
    },
    customer_gender: {
        type: String,
    },
    customer_income_group: {
        type: String,
    },
    customer_region: {
        type: String,
    },
    customer_marital_status: {
        type: String,
    },
}, {
    collection: 'policies',
});

module.exports = mongoose.model('Policy', Policy);
