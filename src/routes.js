const dbConnection = require('../database/db_connection.js');
const bcrypt = require('bcrypt');

const home = {
  method: 'GET',
  path: '/',
  handler: (req, reply) => {
    reply.view('index', {
      credentials: req.auth.credentials,
    });
  },
};

const loginPage = {
  method: 'GET',
  path: '/login-page',
  handler: (req, reply) => {
    console.log(req.auth.credentials);
    reply.view('login-page');
  },
};

const login = {
  method: 'POST',
  path: '/login',
  handler: (req, reply) => {
    const username = req.payload.username;
    const password = req.payload.password;

    dbConnection.query(`SELECT * from users WHERE users.username = '${username}';`, (err, res) => {
      if (err) throw err;
      const user = res.rows[0];
      bcrypt.compare(password, user.password, (err, isValid) => {
        if (err) throw err;
        if (isValid) {
          req.cookieAuth.set({ username });
          reply.redirect('/create-post');
        } else {
          reply.view('failed-login');
        }
      });
    });
  },
};

const createPost = {
  method: 'GET',
  path: '/create-post',
  handler: (req, reply) => {
    console.log(req.auth.credentials);
    if (req.auth.isAuthenticated) {
      reply.view('create-post', {
        credentials: req.auth.credentials,
      });
    } else {
      reply.redirect('/login-page');
    }
  },
};


module.exports = [
  home,
  loginPage,
  login,
  createPost,
];
