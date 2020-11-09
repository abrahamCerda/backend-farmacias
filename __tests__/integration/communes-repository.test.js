const communesRepository = require('../../communes/repositories/communes-repository');

describe('Integration Comunnes Repository', () => {
    const testRegionId = 7;
    const testNumberOfCommunes = 52;
    test('should get all RM communes in JSON format', () => {
        return communesRepository.getAllRegionCommunes(testRegionId)
            .then(jsonCommunes => {
                expect(jsonCommunes).toBeDefined();
                expect(jsonCommunes).toHaveLength(testNumberOfCommunes);
                expect(jsonCommunes).not.toContain('Elija Comuna');
                expect(jsonCommunes).toContain('PEÑAFLOR');
                expect(jsonCommunes).toContain('TIL-TIL');
            });
    });
});