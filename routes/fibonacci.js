const express = require('express');
var router = express.Router();

var math = require('../math');

router.get('/', function(req, res,next) {
  if (req.query.fibonum) {
    math.fibonacci(req.query.fibonum, (err, fiboval) => {
      res.render('fibonacci', {
        title: "Calculate Fibonacci numbers",
        fibonum: req.query.fibonum,
        fiboval: fiboval
      });
    });
  } else {
    res.render('fibonacci', {
      title: 'Calculate Fibonacci numbers',
      fiboval: undefined
    });
  }
});

module.exports = router;
