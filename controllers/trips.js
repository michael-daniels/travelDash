const knex = require("../db/knex.js");

module.exports = {

  addTrips: function (req, res) {
    knex('flight').where('id', req.body.flight_id)
      .then((result)=>{
        console.log('result',result[0]);
        knex('trips').insert({
          user_id: req.session.user.id,
          desc: `Trip to ${result[0].dest}`,
          flight_id: result[0].id

        }, '*').then(()=>{
          res.redirect('/trips')
        })
      })//end of outter most .then()
  }

  } //end of module
