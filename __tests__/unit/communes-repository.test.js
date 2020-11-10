const fetch = require('node-fetch');
const communesRepository = require('../../communes/repositories/communes-repository');
const communesGenerator = require('../utils/communes-generator');
jest.mock('node-fetch');
const {Response} = jest.requireActual('node-fetch');

describe('Unit Communes Repository', () => {
    const testRegionId = 7;
    const testXmlCommunes = communesGenerator.generateHTMLCommunes();
    const testNumberOfCommunes = 52;

    test('should get all RM communes in JSON format', () => {
        fetch.mockReturnValue(Promise.resolve(new Response(testXmlCommunes)));
        return communesRepository.getAllRegionCommunes(testRegionId)
            .then(jsonCommunes => {
                expect(jsonCommunes).toBeDefined();
                expect(jsonCommunes).toHaveLength(testNumberOfCommunes);
                expect(jsonCommunes).not.toContain('Elija Comuna');
                expect(jsonCommunes).toContain('PEÑAFLOR');
                expect(jsonCommunes).toContain('TIL-TIL');
            });
    });

    /* HERE WE CAN ADD MORE TESTS */
});