const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
var knex = require('../db/knex.js');

module.exports = function(app){
  const store = new KnexSessionStore({
      knex: knex,
      tablename: 'sessions' // optional. Defaults to 'sessions'
  });


  app.use(session({
      secret: 'me love you long time',
      cookie: {
          maxAge: 2592000 // 30 days
      },
      resave: false,
      saveUninitialized: false,
      store: store
  }));
} //end of module
