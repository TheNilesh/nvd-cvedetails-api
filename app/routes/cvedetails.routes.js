module.exports = (app) => {
    const cvedetails = require('../controllers/cvedetails.controller.js');
    app.get('/cvedetails/:cveid', cvedetails.findOne);
}
