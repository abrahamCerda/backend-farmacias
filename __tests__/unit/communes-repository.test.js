const axios = require('axios');
const communesRepository = require('../../communes/repositories/communes-repository');
jest.mock('axios');

describe('Communes Repository', () => {
    const testRegionId = 7;
    const testXmlCommunes = `<option value='0' selected>Elija Comuna</option>
        <option value='82'>ALHUE</option>
        <option value='83'>BUIN</option>
        <option value='84'>CALERA DE TANGO</option>
        <option value='85'>CERRILLOS</option>
        <option value='86'>CERRO NAVIA</option>
        <option value='87'>COLINA</option>
        <option value='88'>CONCHALI</option>
        <option value='89'>CURACAVI</option>
        <option value='90'>EL BOSQUE</option>
        <option value='91'>EL MONTE</option>
        <option value='92'>ESTACION CENTRAL</option>
        <option value='93'>HUECHURABA</option>
        <option value='94'>INDEPENDENCIA</option>
        <option value='95'>ISLA DE MAIPO</option>
        <option value='96'>LA CISTERNA</option>
        <option value='97'>LA FLORIDA</option>
        <option value='98'>LA GRANJA</option>
        <option value='99'>LA PINTANA</option>
        <option value='100'>LA REINA</option>
        <option value='101'>LAMPA</option>
        <option value='102'>LAS CONDES</option>
        <option value='103'>LO BARNECHEA</option>
        <option value='104'>LO ESPEJO</option>
        <option value='105'>LO PRADO</option>
        <option value='106'>MACUL</option>
        <option value='107'>MAIPU</option>
        <option value='108'>MARIA PINTO</option>
        <option value='109'>MELIPILLA</option>
        <option value='110'>ÑUÑOA</option>
        <option value='111'>PADRE HURTADO</option>
        <option value='112'>PAINE</option>
        <option value='113'>PEDRO AGUIRRE CERDA</option>
        <option value='114'>PEÑAFLOR</option>
        <option value='115'>PEÑALOLEN</option>
        <option value='116'>PIRQUE</option>
        <option value='117'>PROVIDENCIA</option>
        <option value='118'>PUDAHUEL</option>
        <option value='119'>PUENTE ALTO</option>
        <option value='120'>QUILICURA</option>
        <option value='121'>QUINTA NORMAL</option>
        <option value='122'>RECOLETA</option>
        <option value='123'>RENCA</option>
        <option value='124'>SAN BERNARDO</option>
        <option value='125'>SAN JOAQUIN</option>
        <option value='126'>SAN JOSE DE MAIPO</option>
        <option value='127'>SAN MIGUEL</option>
        <option value='128'>SAN PEDRO</option>
        <option value='129'>SAN RAMON</option>
        <option value='130'>SANTIAGO</option>
        <option value='133'>TALAGANTE</option>
        <option value='134'>TIL-TIL</option>
        <option value='135'>VITACURA</option>`;

    const testNumberOfCommunes = 52;

    test('should get all RM communes in JSON format', () => {
        axios.post.mockResolvedValue(testXmlCommunes);
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