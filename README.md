To clone run `git clone https://github.com/oracionbreech/bmi-calculator-api`

### To run inside a docker container

Requirements

* Docker is properly installed

Run `npm run docker-prod` or `yarn docker-prod`
 - This will install all dependencies, build and open the API in port 5000. When hosted locally, the API URI should be either `localhost:5000` or `127.0.0.1:5000`

### To run outside a docker container

Requirements

* npm or yarn is installed

Run `npm install` or `yarn` 
 - This will install all dependencies

To run the dev server run `npm run dev` or `yarn dev`
 -  This will run the api in Development mode in port 5000. The API URI should be either `localhost:5000` or `127.0.0.1:5000`

Run `npm run test` or `yarn test` to make sure all endpoints are working.
