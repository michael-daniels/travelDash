//Update the name of the controller below and rename the file.
const users = require("../controllers/users.js");
const index = require("../controllers/index.js");
const flight = require("../controllers/flight.js");
const airline = require("../controllers/airline.js");


module.exports = function(app){

  app.get('/', index.homePage);

  app.post('/add_user', users.createUser);

  app.get('/trips', flight.displayFlight);

  app.get('/airline_new', airline.airlineGet);

  app.post('/add_airline', airline.addAirline);

  app.get('/airline_login', airline.airlineLogin);

  app.post('/airline_logged_in', airline.airlineLoggedIn);

  app.get('/airline', airline.airline);

}
