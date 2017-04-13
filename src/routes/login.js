const env = require('env2')('config.env');
const clientID = process.env.CLIENT_ID;

module.exports = {
  method: 'GET',
  path: '/login',
  handler: (request, reply) => {
    reply.redirect(`${'https://github.com/login/oauth/authorize' + '?client_id='}${clientID}&redirect_uri=${process.env.BASE_URL}welcome`);
  },
};
