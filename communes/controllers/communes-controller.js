const express = require('express');
const router = express.Router();
const errorHandler = require('../../shared/errors/error-handler');
const communesService = require('../services/communes-service');
const METROPOLITAN_REGION_ID = 7;

router.get('', (req, res, next) => {
    communesService.getRegionAllCommunes(METROPOLITAN_REGION_ID)
        .then(jsonCommunes => {
            res.status(200).json({
                communes: jsonCommunes,
            });
        })
        .catch(error => {
            errorHandler(error, res);
        });
});


module.exports = router;