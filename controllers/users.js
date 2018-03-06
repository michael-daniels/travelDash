const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  createUser: function(req, res) {
    knex('users').insert(req.body).then(()=>{
      res.redirect('/trips')
    })

  }

}
