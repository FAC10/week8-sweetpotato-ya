const hapi = require('hapi');
const inert = require('inert');
const routes = require('./routes');
const vision = require('vision');
const Handlebars = require('handlebars');
const cookieAuth = require('hapi-auth-cookie');
const hapiAuth = require('hapi-auth-basic');
const validate = require('./validate');
const jwt = require('hapi-auth-jwt2');
const fs = require('fs');

const server = new hapi.Server();

const port = process.env.PORT || 4000;

const tls = {
  key: fs.readFileSync('./keys/key.pem'),
  cert: fs.readFileSync('./keys/cert.pem'),
};

server.connection({
  port,
  tls,
});

server.register([inert, vision, hapiAuth, cookieAuth, jwt], (err) => {
  if (err) throw err;

  const options = {
    password: '12345678901234567890123456789012345678901234567890123456789012345678901234567890',
    cookie: 'logged-in',
    isSecure: false,
    ttl: 24 * 60 * 60 * 1000,
  };

  server.auth.strategy('base', 'cookie', 'optional', options);

  server.views({
    engines: { hbs: Handlebars },
    path: 'views',
    layout: 'default',
    layoutPath: 'views/layouts',
    partialsPath: 'views/partials',
    // helpersPath: 'views/helpers',
  });


  server.route(routes);
});

const strategyOptions = {
  key: process.env.SECRET,
  validateFunct: validate,
  verifyOtions: { algorithms: ['HS256'] },
};

module.exports = server;
