const express = require('express');
const router = express.Router();
const cache = require('../../shared/cache/cache');
const pharmaciesService = require('../services/pharmacies-service');
const errorHandler = require('../../shared/errors/error-handler');
const METROPOLITAN_REGION_ID = process.env.METROPOLITAN_REGION_ID || 7;
const RESPONSE_TTL = 1800;

router.get('/on-duty', function(req, res, next) {
  const names = Array.isArray(req.query.names) ? req.query.names.map(name => name.toUpperCase())
      : req.query.names.toUpperCase();
  const communes = Array.isArray(req.query.communes) ? req.query.communes.map(commune => commune.toUpperCase())
      : req.query.communes.toUpperCase();
  pharmaciesService.getRegionPharmacies(METROPOLITAN_REGION_ID, {
    names,
    communes,
  }).then(pharmacies => {
    const responseBody = {
      pharmacies,
    };
    cache.set(req.nodeCacheKey, responseBody, RESPONSE_TTL);
    res.status(200)
        .json(responseBody);
  }).catch(error => {
    errorHandler(error, res);
  });
});

module.exports = router;
