const FormData = require('form-data');
const fetch = require('node-fetch');
const checkStatus = require('../../shared/errors/check-status');
const HtmlParser = require('../../util/html-parser');
const DEFAULT_MINSAL_API_BASE_URL = 'https://midastest.minsal.cl/farmacias/maps/index.php';
const MINSAL_API_BASE_URL = process.env.MINSAL_COMUNES_API_BASE_URL
    || DEFAULT_MINSAL_API_BASE_URL;
const SELECT_OPTION_TEXT = 'Elija Comuna';

const repository = {
    getAllRegionCommunes: (regionId) => {
        const endpoint = `${MINSAL_API_BASE_URL}/utilidades/maps_obtener_comunas_por_regiones`;
        const formData = new FormData();
        formData.append('reg_id', regionId);
        const options = {
            method: 'POST',
            body: formData,
            headers: formData.getHeaders(),
        }
        return fetch(endpoint, options)
            .then(checkStatus)
            .then(response => response.text())
            .then(textBody => {
                const tagsContent = HtmlParser.extractTagValues(textBody);
                return tagsContent.reduce((accum, value) => {
                    if (value === SELECT_OPTION_TEXT) {
                        return accum;
                    }
                    accum.push(value);
                    return accum;
                }, [])
            });
    },
};

module.exports = repository;