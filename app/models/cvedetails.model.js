const mongoose = require('mongoose');

const CVEDetailsSchema = mongoose.Schema({
    _id: String
});

module.exports = mongoose.model('CVEDetails', CVEDetailsSchema);
