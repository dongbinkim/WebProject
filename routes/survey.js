var express = require('express');
    User = require('../models/User');
var router = express.Router();

// survey page - 설문지 페이지
router.get('/', function(req, res, next) {
  res.render('survey/index',{title: 'survey'});
});

// create page - 설문지 생성 페이지
router.get('/create', function(req, res, next) {
  res.render('survey/create',{title: 'create'});
});

router.get('/form', function(req, res, next) {
  res.render('survey/form',{title: 'form'});
});

module.exports = router;
