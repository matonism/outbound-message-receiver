var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	console.log('in index.js');
  // res.render('index', { title: 'Express' });
});

module.exports = router;