const pharmaciesRepository = require('../repositories/pharmacies-repository');

const service = {
    getRegionPharmacies: (regionId, filters) => {
        return pharmaciesRepository
            .getAllRegionPharmacies(regionId)
            .then(pharmacies => {
                if((filters.names === undefined || filters.names === '' || !filters.names.length)
                    && (!filters.communes || filters.communes === '' || !filters.communes.length)){
                    return pharmacies;
                }
                let filterFunc = null;
                if((filters.names !== undefined && filters.names.length > 0) &&
                    (filters.communes !== undefined && filters.communes.length > 0)){
                    filterFunc = (item) => filters.communes.includes(item.commune)
                        && filters.names.includes(item.local_name);
                }
                else if((filters.names === undefined || filters.names.length === 0)
                    && (filters.communes !== undefined && filters.communes.length > 0)){
                    filterFunc = (item) => filters.communes.includes(item.commune);
                }
                else if((filters.communes === undefined || filters.communes.length === 0)
                    && (filters.names.length > 0)){
                    filterFunc = (item) => filters.names.includes(item.local_name);
                }
                return pharmacies.reduce((accum, value) => {
                    const pharmacy = {
                        local_name: value.local_nombre.trim().toUpperCase(),
                        address: value.local_direccion.trim().toUpperCase(),
                        commune: value.comuna_nombre.trim().toUpperCase(),
                        telephone: value.local_telefono.trim(),
                        lat: parseFloat(value.local_lat),
                        lng: parseFloat(value.local_lng),
                    }
                    const valid = filterFunc(pharmacy);
                    if(!valid) {
                        return accum;
                    }
                    accum.push(pharmacy);
                    return accum;
                }, []);
            });
    },
};

module.exports = service;