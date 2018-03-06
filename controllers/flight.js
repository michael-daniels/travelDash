const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  displayFlight: function(req, res) {
    knex('flight').then((results)=>{
      res.render('trips', {flight:results, user_info: req.session.user})
    })

  }

}//end of module
