const axios = require('axios');
const axiosErrorHandler = require('../../shared/errors/axios-error-handler');
const { DOMParser } = require('xmldom');
const xmlToJSON = require('xmltojson');
xmlToJSON.stringToXML = (string) => new DOMParser().parseFromString(string, 'text/xml');
const DEFAULT_MINSAL_API_BASE_URL = 'https://farmanet.minsal.cl/maps/index.php';
const MINSAL_API_BASE_URL = process.env.MINSAL_API_BASE_URL
    || DEFAULT_MINSAL_API_BASE_URL;
const SKIP_OPTION_INDEX = 0;

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
                const parsedXml = xmlToJSON.parseString(response.data);
                const validCommunes = parsedXml.xml.reduce((accum, value) => {
                    if(value.attr.value.value === SKIP_OPTION_INDEX){
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