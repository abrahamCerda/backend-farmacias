# Consorcio Pharmacies API
This project is an application that find on-duty pharmacies for a company. This app works like a REST API.

## Technologies
- NodeJs under the ExpressJs framework.

## Dependencies
- NodeJs (Tested on version 14.5.x)
- Npm (Tested on version 6.14.x)

## Running
Clone the project and cd into the project root folder.
~~~
git clone https://github.com/abrahamCerda/backend-farmacias
cd backend-farmacias
~~~
Install project dependencies
~~~
npm run install
~~~
Create .env file from the .env.example and replace with your enviroment values:
~~~
cp .env.example .env
~~~
Start the application in local enviroment
~~~
npm run dev
~~~
To run application in a docker container, run:
~~~
docker-compose up
~~~
To run tests, use this command:
~~~
npm run test
~~~
## API Usage
- **Get on-duty pharmacies:** Find on-duty pharmacies in the Metrotopolitan Region, filtering by commune name and pharmacy local name.
~~~
Request Headers:
    - Accept: application/json

Request Method: GET

Path: /pharmacies/on-duty

Request Query Params:

    - names: local names to filter.
    - communes: commmunes names to filter.
 

Example URL: http://localhost:3001/pharmacies/on-duty?names=ahumada&communes=buin

Example Response:
    {
        pharmacies: [
            {local_name: "SAN ENRIQUE", address: "LIBERTADOR BERNARDO O'HIGGINS 215", commune: "ALHUE",…}
            address: "LIBERTADOR BERNARDO O'HIGGINS 215"
            commune: "ALHUE"
            lat: -34.030963490352796
            lng: -71.09947573139641
            local_name: "SAN ENRIQUE"
            telephone: "+5602"
            },
            {local_name: "SRA. FELICINDA", address: "21 DE MAYO 439", commune: "ALHUE", telephone: "+56",…}
            address: "21 DE MAYO 439"
            commune: "ALHUE"
            lat: -34.031997
            lng: -71.100263
            local_name: "SRA. FELICINDA"
            telephone: "+56",
            }
        ]
    }
~~~
- **Get all RM communes:** Find all communes in Metropolitan Region.
~~~
Request Headers:
    - Accept: application/json

Request Method: GET

Path: /communes

Example URL: http://localhost:3001/communes

Example Response:
    {
    communes: [
        0: "ALHUE",
        1: "BUIN",
        2: "CALERA DE TANGO",
        3: "CERRILLOS",
        4: "CERRO NAVIA",
        5: "COLINA",
        6: "CONCHALI",
        7: "CURACAVI",
        8: "EL BOSQUE",
        9: "EL MONTE",
        10: "ESTACION CENTRAL",
        11: "HUECHURABA",
        12: "INDEPENDENCIA",
        13: "ISLA DE MAIPO",
        14: "LA CISTERNA",
        15: "LA FLORIDA",
        16: "LA GRANJA",
        17: "LA PINTANA",
        18: "LA REINA",
        19: "LAMPA",
        20: "LAS CONDES",
        21: "LO BARNECHEA",
        22: "LO ESPEJO",
        23: "LO PRADO",
        24: "MACUL",
        25: "MAIPU",
        26: "MARIA PINTO",
        27: "MELIPILLA",
        28: "ÑUÑOA",
        29: "PADRE HURTADO",
        30: "PAINE",
        31: "PEDRO AGUIRRE CERDA",
        32: "PEÑAFLOR",
        33: "PEÑALOLEN",
        34: "PIRQUE",
        35: "PROVIDENCIA",
        36: "PUDAHUEL",
        37: "PUENTE ALTO",
        38: "QUILICURA",
        39: "QUINTA NORMAL",
        40: "RECOLETA",
        41: "RENCA",
        42: "SAN BERNARDO",
        43: "SAN JOAQUIN",
        44: "SAN JOSE DE MAIPO",
        45: "SAN MIGUEL",
        46: "SAN PEDRO",
        47: "SAN RAMON",
        48: "SANTIAGO",
        49: "TALAGANTE",
        50: "TIL-TIL",
        51: "VITACURA",
    ]
    }
~~~