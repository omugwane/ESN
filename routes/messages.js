var express = require('express');
var router = express.Router();
// configure default response for api
router.get('/', function (req, res) {
    res.json({
        status: 'API functional',
        message: 'message routes'
    });
});
//export api
module.exports=router;