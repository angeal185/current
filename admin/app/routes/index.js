const express = require('express'),
fs = require('fs'),
router = express.Router(),
config = require('../config/config');
data = require('../data/data');

var a = config.entries;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'dash',
	data: data
  });
});

a.forEach(function(i) {
	router.get('/' + i, function(req, res) {
	  res.render(i, {
		title: i,
		data: data
	  });
	});
});

/*

a.forEach(function(i) {
	router.post('/update' + i, function(req, res) {
	var toUpdate = req.body.toUpdate; //get task command from body
	fs.writeFile('./app/data/' + i +'.json', toUpdate, 'utf8'),
			  function(err) {
				  if (err) throw err;
			  };
	  res.redirect('/');
	});
});

router.post('/updateskills', function(req, res) {
var toUpdate = req.body.toUpdate; //get task command from body
fs.writeFile('./app/data/skills.json', toUpdate, 'utf8'),
      function(err) {
        if (err) throw err;
      };
  res.redirect('/');
});
*/
module.exports = router;
