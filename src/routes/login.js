const env = require('env2');
env('config.env');

const querystring = require('querystring');
const clientID = process.env.CLIENT_ID;
const cookieAuth = require('hapi-auth-cookie');

module.exports = {
  method: 'GET',
  path: '/login',
  handler: (request, reply) => {
    reply.redirect(`${'https://github.com/login/oauth/authorize' + '?client_id='}${clientID}&redirect_uri=${process.env.BASE_URL}welcome`);
  },
};
