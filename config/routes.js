//Update the name of the controller below and rename the file.
const users = require("../controllers/users.js");
const index = require("../controllers/index.js");
const flight = require("../controllers/flight.js");


module.exports = function(app){

  app.get('/', index.homePage);

  app.post('/add_user', users.createUser);

  app.get('/trips', flight.displayFlight)

}
