const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  createUser: function(req, res) {

    knex('users').insert(req.body, "*")

    .then((result)=>{

      console.log("result: ", result);
      req.session.user = result[0];

      console.log('session: ',req.session.user)
      req.session.save(()=>{
        res.redirect('/trips');
      })
    })


  },
  createSession: function (req, res) {
    // if(!req.session.userInfo){
    //   req.session.userInfo  [];
    // }


  }

} //end of module
