const express = require('express');
const router = express.Router();

const LisenceRoute = require('./assignment/license.api.routes');
const adminRoute = require('./assignment/admin.api.routes');

router.use('/admin', adminRoute);
router.use('/license', LisenceRoute);



module.exports = router;
