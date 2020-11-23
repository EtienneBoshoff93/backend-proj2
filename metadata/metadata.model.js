const mongoose = require('mongoose');

const metadataSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    document_name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    document_type:  {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    has_email:  {
        type: Boolean,
        required: true,
    },
    has_ID:  {
        type: Boolean,
        required: true,
    },
    has_address:  {
        type: Boolean,
        required: true,
    },
    has_number:  {
        type: Boolean,
        required: true,
    },
    has_gender:  {
        type: Boolean,
        required: true,
    },
    document_classification: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },

});

module.exports = mongoose.model('Metadata', metadataSchema);