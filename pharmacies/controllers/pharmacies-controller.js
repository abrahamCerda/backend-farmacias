const express = require('express');
const router = express.Router();
const pharmaciesService = require('../services/pharmacies-service');
const errorHandler = require('../../shared/errors/error-handler');
const METROPOLITAN_REGION_ID = process.env.METROPOLITAN_REGION_ID || 7;

router.get('/on-duty', function(req, res, next) {
  const names = req.query.name;
  const communes = req.query.commune;
  pharmaciesService.getRegionPharmacies(METROPOLITAN_REGION_ID, {
    names,
    communes,
  }).then(pharmacies => {
    res.status(200)
        .json({
          pharmacies,
        });
  }).catch(error => {
    errorHandler(error, res);
  });
});

module.exports = router;
