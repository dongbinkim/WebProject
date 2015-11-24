var express = require('express');
    User = require('../models/User');
var router = express.Router();


// home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home' });
});

// user page
router.get('/user', function(req, res, next) {
  res.render('user/index',{title: 'user'});
});


// signin page - 로그인 페이지
router.get('/signin', function(req, res, next) {
  res.render('signin');
});

router.post('/signin', function(req, res, next) {
  User.findOne({email: req.body.email}, function(err, user) {
    if (err) {
      res.render('error', {message: "Error", error: err});
    } else if (!user) {
      req.flash('danger', '존재하지 않는 사용자 입니다.');
      res.redirect('back');
    } else if (user.password !== req.body.password) {
      req.flash('danger', '비밀번호가 일치하지 않습니다.');
      res.redirect('back');
    } else {
      req.session.user = user;
      req.flash('success', '로그인 되었습니다.');
      res.redirect('/survey');
    }
  });
});

// survey page - 설문지 페이지
router.get('/survey', function(req, res, next) {
  res.render('survey/index',{title: 'survey'});
});

// create page - 설문지 생성 페이지
router.get('/create', function(req, res, next) {
  res.render('survey/create',{title: 'create'});
});

// preivew page
router.get('/preview', function(req, res, next) {
  res.render('preview/index',{title: 'preview'});
});
// collect page
router.get('/collect', function(req, res, next) {
  res.render('collect/index',{title: 'collect'});
});
// return homepage
router.get('/collect', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
