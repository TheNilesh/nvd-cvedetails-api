const CVEDetails = require('../models/cvedetails.model.js');

exports.findOne = (req, res) => {

    CVEDetails.findById(req.params.cveid)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "CVEDetails not found with id " + req.params.cveid
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "CVEDetails not found with id " + req.params.cveid
            });
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.cveid
        });
    });
};
