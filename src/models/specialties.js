const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Scheme declaration
let specialtiesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    createdBy: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    updatedBy: {
        type: Number,
        require: true
    },
    updatedAt: {
        type: Date,
        required: true
    }
});
//compile and export schema
module.exports = mongoose.model('Specialties', specialtiesSchema);