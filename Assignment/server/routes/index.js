let express = require('express');
let router = express.Router();

const Api = require('./v1/index.api.v1.routes');


router.use('/api', Api);


module.exports = router;




