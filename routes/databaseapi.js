var express = require('express');
var router = express.Router();



router.post('/', function(req, res, next) {
 	console.log("in db");
	
	var models = require('../model/usermodel'); //call model for database
	var adduser = new models({
                    fname :req.body.fname,
                    lname :req.body.lname
                });
	adduser.save(function(err) {
          if (!err) {
            console.log('new data added successfully');
			  
          } else {
            console.log('Error ' + err);
          }
		res.render('contact',{result:"new data added successfully"});
    });
});

module.exports = router;
