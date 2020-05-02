const mongoose = require('mongoose');

const CVEMetaSchema = mongoose.Schema({
    _id: String,
    lastModifiedDate: Date,
});

module.exports = mongoose.model('CVEMeta', CVEMetaSchema);
