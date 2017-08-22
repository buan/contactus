var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', function(req, res, next) {
 /* res.render('contact', { title: 'Contact Page' });*/
	res.render('contact');
});

router.post('/', urlencodedParser, function(req, res, next) {
  	console.log(req.originalUrl);
	res.render('contact',{data:req.body,url:req.originalUrl});
	
	 
});

module.exports = router;