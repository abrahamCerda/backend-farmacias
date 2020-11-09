const express = require('express');
const router = express.Router();
const pharmaciesService = require('../services/pharmacies-service');

router.get('/on-duty', function(req, res, next) {
  const name = req.query.name;
  const commune = req.query.commune;
  res.status(200).json({
    message: 'OK',
  });
});

module.exports = router;
