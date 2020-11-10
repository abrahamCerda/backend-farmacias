const pharmaciesService = require('../../pharmacies/services/pharmacies-service');

describe('Integration Pharmacies Service', () => {
    const testRegionId = 7;
    const testFilters = {
        names: ['AHUMADA', 'CRUZ VERDE', 'EL ALBA'],
        communes: ['BUIN', 'PUENTE ALTO'],
    };
    test('should get filtered on-duty pharmacies', () => {
        return pharmaciesService.getRegionPharmacies(testRegionId, testFilters)
            .then(filteredPharmacies => {
                expect(filteredPharmacies).toBeDefined();
                expect(filteredPharmacies.length).not.toBe(0);
            });
    });
});