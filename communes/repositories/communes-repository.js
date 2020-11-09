const axios = require('axios');
const FormData = require('form-data');
const axiosErrorHandler = require('../../shared/errors/axios-error-handler');
const HtmlParser = require('../../util/html-parser');
const DEFAULT_MINSAL_API_BASE_URL = 'https://farmanet.minsal.cl/maps/index.php';
const MINSAL_API_BASE_URL = process.env.MINSAL_API_BASE_URL
    || DEFAULT_MINSAL_API_BASE_URL;
const SELECT_OPTION_TEXT = 'Elija Comuna';

const repository = {
    getAllRegionCommunes: (regionId) => {
        const endpoint = `${MINSAL_API_BASE_URL}/utilidades/maps_obtener_comunas_por_regiones`;
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append('reg_id', regionId);
            const headers = {
                'Content-Type': 'multipart/form-data',
            };
            axios.post(endpoint, formData, {
                headers,
            }).then(response => {
                const tagsContent = HtmlParser.extractTagValues(response);
                const validCommunes = tagsContent.reduce((accum, value) => {
                    if(value === SELECT_OPTION_TEXT){
                        return accum;
                    }
                    accum.push(value);
                    return accum;
                }, []);
                resolve(validCommunes);
            }).catch(error => {
                axiosErrorHandler(error);
            });
        })
    },
};

module.exports = repository;