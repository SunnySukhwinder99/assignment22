var express = require('express');
var router = express.Router();
const ctrlMobiles = require('../controllers/mobiles');

router
.route('/mobiles')
.get(ctrlMobiles.getMobiles)
.post(ctrlMobiles.createMobiles);

router
.route('/mobiles/:mobile_id')
.get(ctrlMobiles.getSingleMobile)
.put(ctrlMobiles.updateMobiles)
.delete(ctrlMobiles.deleteMobiles);

module.exports = router;