const communesRepository = require('../repositories/communes-repository');

const service = {
    getRegionAllCommunes: (regionId) => {
      return communesRepository.getAllRegionCommunes(regionId);
    },
};

module.exports = service;