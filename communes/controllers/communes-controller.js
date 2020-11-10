const express = require('express');
const router = express.Router();
const cache = require('../../shared/cache/cache');
const errorHandler = require('../../shared/errors/error-handler');
const communesService = require('../services/communes-service');
const METROPOLITAN_REGION_ID = process.env.METROPOLITAN_REGION_ID || 7;
const RESPONSE_TTL = 3600 * 24;

router.get('', (req, res, next) => {
    communesService.getRegionAllCommunes(METROPOLITAN_REGION_ID)
        .then(jsonCommunes => {
            const responseBody = {
                communes: jsonCommunes,
            };
            cache.set(req.nodeCacheKey, responseBody, RESPONSE_TTL);
            res.status(200).json(responseBody);
        })
        .catch(error => {
            errorHandler(error, res);
        });
});


module.exports = router;