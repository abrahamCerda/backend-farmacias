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
                return pharmacies.reduce((accum, value) => {
                    if(!filters.names.includes(value.local_nombre) &&
                        !filters.communes.includes(value.comuna_nombre)){
                        return accum;
                    }
                    accum.push({
                       local_name: value.local_nombre,
                        address: value.local_direccion,
                        commune: value.comuna_nombre,
                        telephone: value.local_telefono,
                        lat: value.local_lat,
                        lng: value.local_lng,
                    });
                    return accum;
                }, []);
            });
    },
};

module.exports = service;