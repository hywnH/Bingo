var express = require('express');
const { Server } = require('http');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bingo Game' });
});

module.exports = router;
