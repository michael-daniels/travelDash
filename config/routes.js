//Update the name of the controller below and rename the file.
const users = require("../controllers/users.js");
const index = require("../controllers/index.js");
const flight = require("../controllers/flight.js");
const airline = require("../controllers/airline.js");
const trips = require("../controllers/trips.js")


module.exports = function(app){

  app.get('/', index.homePage);

  app.post('/add_user', users.createUser);

  app.get('/trips', flight.displayFlight);

  //working...
  app.post('/trips/add_trips', trips.addTrips);


  app.get('/airline_new', airline.airlineGet);

  app.get('/airline_login', airline.airlineLogin);

  app.post('/airline_logged_in', airline.airlineLoggedIn);

  app.get('/airline', airline.airline);


}
