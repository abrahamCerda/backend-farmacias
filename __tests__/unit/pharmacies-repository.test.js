const fetch = require('node-fetch');
const pharmaciesRepository = require('../../pharmacies/repositories/pharmacies-repository');
const pharmaciesGenerator = require('../utils/pharmacies-generator');
jest.mock('node-fetch');
const {Response} = jest.requireActual('node-fetch');

describe('Unit Pharmacies Repository', () => {
   /*const testFilters = {
       names: ['AHUMADA', 'CRUZ VERDE', 'EL ALBA'],
       communes: ['BUIN', 'PUENTE ALTO'],
   };
    */
   const testRegionId = 7;

   test('should get pharmacies', () => {
       const testJsonPharmacies = JSON.stringify(pharmaciesGenerator.generateJsonCommunes());
       fetch.mockReturnValue(Promise.resolve(new Response(testJsonPharmacies)));
       return pharmaciesRepository.getAllRegionPharmacies(testRegionId)
           .then(pharmacies => {
               expect(pharmacies).toBeDefined();
               expect(pharmacies.lenght).not.toBe(0);
           });
   });
});