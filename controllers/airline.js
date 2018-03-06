const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  airlineGet: function(req, res) {
      res.render('airline_new')
  },

  addAirline: function(req, res) {
    knex('airline').insert(req.body)
      .then(() => {
        res.redirect('airline_login')
      })
  },

  airlineLogin: function(req, res) {
    knex('airline')
      .then((results) => {
        res.render('airline_login', {airlines: results})
      })

  },

  airlineLoggedIn: function(req, res) {
    res.redirect('airline')
  },

  airline: function(req, res) {
    res.render('airline')
  },
}//end of module
