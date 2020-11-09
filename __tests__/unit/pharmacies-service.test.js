const fetch = require('node-fetch');
const pharmaciesRepository = require('../../pharmacies/repositories/pharmacies-repository');
const pharmaciesGenerator = require('../utils/pharmacies-generator');
const pharmaciesService = require('../../pharmacies/services/pharmacies-service');
jest.mock('../../pharmacies/repositories/pharmacies-repository');
jest.mock('node-fetch');
const {Response} = jest.requireActual('node-fetch');

describe('Unit Pharmacies Service', () => {
    const testFilters = {
        names: ['AHUMADA', 'CRUZ VERDE', 'EL ALBA'],
        communes: ['BUIN', 'PUENTE ALTO'],
    };
    const testRegionId = 7;

    test('should get filtered pharmacies', () => {
        const testJsonPharmacies = pharmaciesGenerator.generateJsonCommunes();
        fetch.mockReturnValue(Promise.resolve(new Response(JSON.stringify(testJsonPharmacies))));
        pharmaciesRepository.getAllRegionPharmacies.mockResolvedValue(testJsonPharmacies);
        return pharmaciesService.getRegionPharmacies(testRegionId, testFilters)
            .then(filteredPharmacies => {
                expect(filteredPharmacies).toBeDefined();
                expect(filteredPharmacies.lenght).not.toBe(0);
                const isFiltered = filteredPharmacies.every(pharmacy =>
                testFilters.communes.includes(pharmacy.comuna_nombre) ||
                    testFilters.names.includes(pharmacy.local_nombre));
                expect(isFiltered).toBeTruthy();
            });
    });
});