let express = require('express');
let router = express.Router();

const LisenceCtrl = require('../../../controllers/license.controllers');

router.get('/', LisenceCtrl.getLicense);


module.exports = router;