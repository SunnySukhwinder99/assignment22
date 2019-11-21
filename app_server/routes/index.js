var express = require('express');
var router = express.Router();
var ctrlAbout = require("../controllers/about");
var ctrlData = require("../controllers/data");

/* GET home page. */
router.get('/', ctrlData.index)
router.get('/about',  ctrlAbout.about)
router.get('/list',  ctrlData.m_list)


module.exports = router;
