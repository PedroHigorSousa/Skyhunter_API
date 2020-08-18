const mongoose = require('mongoose');

const ComputerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    processor: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    operationalSystem: {
        type: String,
        required: true
    },
});

mongoose.model('Computer', ComputerSchema);