let express = require('express');
let router = express.Router();

const AdminCtrl = require('../../../controllers/admin.controllers');

router.post('/:id', AdminCtrl.getAdmin);

module.exports = router;



