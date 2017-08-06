var math = require('./math');
const express = require('express');
const logger = require('morgan');


var app = express();

app.use(logger('dev'));
app.get('/fibonacci/:n',  (req, res, next) => {
  math.fibonacci(Math.floor(req.params.n), (err, val) => {
    if (err) next('FIBO SERVER ERROR ' + err);
    else {
      res.send({
        n: req.params.n,
        result: val
      });
    }
  });
});
