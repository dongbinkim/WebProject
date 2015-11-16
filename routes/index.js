var express = require('express');
    User = require('../models/User');
var router = express.Router();

// homepage
router.get('/', function(req, res, next) {
  res.render('index', { title: 'homepage' });
});
// login page
router.get('/users', function(req, res, next) {
  res.render('users',{title: 'users'});
});
  // 값 입력
router.post('', function(req, res, next){

})
// forms page
router.get('/forms', function(req, res, next) {
  res.render('forms',{title: 'forms'});
});
//quest page
router.get('/quest', function(req, res, next) {
  res.render('quest',{title: 'quest'});
});
//answer page
router.get('/ans', function(req, res, next) {
  res.render('ans',{title: 'ans'});
});
// return homepage
router.get('/ans', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
