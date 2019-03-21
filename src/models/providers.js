const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

//Scheme declaration
let providersSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    specialty: {
        type: Schema.Types.Mixed,
        required: true
    },
    projectedStartDate: {
        type: Date,
        required: true
    },
    employerId: {
        type: Number,
        required: true
    },
    providerType: {
        type: String,
        required: true
    },
    staffStatus: {
        type: String,
        required: true
    },
    assignedTo: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    createBy: {
        type: Number,
        required: true
    },
    createAt: {
        type: Date,
        required: true
    },
    updateBy: {
        type: Number
    },
    updateAt: {
        type: Date
    }
});

providersSchema.plugin(uniqueValidator);
//compile and export schema
module.exports = mongoose.model('Providers', providersSchema);