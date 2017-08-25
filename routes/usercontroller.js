var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var User = require('../model/usermodel');

// CREATES A NEW USER
router.post('/add', function (req, res) {
   /* console.log(req.body);*/
	
	 User.create({
            fname : req.body.fname,
            lname : req.body.lname
        }, 
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
	
	});


// Deletes THE USERS IN THE DATABASE

router.delete('/users/:id', function (req, res) {
   /*console.log(req.params.id);*/
	User.findByIdAndRemove({_id:req.params.id}).then(function(result){
		res.send(result);
	});
	
});


//Update user

router.put('/users/:id', function (req, res) {
   /*console.log(req.params.id);*/
	User.findByIdAndUpdate({_id:req.params.id}).then(function(result){
		User.findOne({_id:req.params.id}).then(function(result){
		res.send(result);
	});
	
});


module.exports = router;