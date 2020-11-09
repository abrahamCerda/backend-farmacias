const pharmaciesRepository = require('../repositories/pharmacies-repository');

const service = {
    getRegionPharmacies: (regionId, filters) => {
        return pharmaciesRepository
            .getAllRegionPharmacies(regionId)
            .then(pharmacies => {
                if(!filters.names && !filters.communes){
                    return pharmacies;
                }
                return pharmacies.filter(pharmacie => filters.names.includes(pharmacie.local_nombre) &&
                filters.communes.includes(pharmacie.comuna_nombre));
            });
    },
};

module.exports = service;