const fetch = require('node-fetch');
const checkStatus = require('../../shared/errors/check-status');
const MINSAL_PHARMACIES_API_BASE_URL = process.env.MINSAL_PHARMACIES_API_BASE_URL ||
    'https://farmanet.minsal.cl/maps/index.php';

const repository = {
    getAllRegionPharmacies: (regionId) => {
        const regionIdParam = encodeURIComponent(regionId);
        const endpoint = `${MINSAL_PHARMACIES_API_BASE_URL}/ws/getLocalesRegion?id_region=${regionIdParam}`;
        return fetch(endpoint)
            .then(checkStatus)
            .then(res => res.json());
    },
};

module.exports = repository;