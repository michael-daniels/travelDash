const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  displayFlight: function(req, res) {
    knex('flight').then((flights)=>{
      //console.log('flightsssss: ', flights);

      knex('trips').innerJoin('flight', 'flight.id', 'trips.flight_id')
      .where('user_id', req.session.user.id)
        .then((results)=>{
          console.log('RESULTS: ', results);
          res.render('trips', {flight:flights, tripResult: results, user_info: req.session.user})
        })
    })


  }

}//end of module
