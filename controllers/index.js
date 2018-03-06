const knex = require('../db/knex.js')


module.exports = {
  //renders home page
  homePage: function(req, res) {
    res.render('index');
  }
}
