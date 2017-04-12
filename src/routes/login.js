const env = require('env2');
env('config.env');

const querystring = require('querystring');
const clientID = process.env.CLIENT_ID;

module.exports = {
  method: 'GET',
  path: '/login',
  handler: (request, reply) => {
    reply.redirect(`${'https://github.com/login/oauth/authorize' + '?client_id='}${clientID}&redirect_uri=${process.env.BASE_URL}welcome`);
  },
};


// module.exports = (request, reply) => {
//   const params = {
//     client_id: process.env.CLIENT_ID,
//     redirect_url: process.env.BASE_URL + '/welcome',
//   }
//
//   const base = 'https://github.com/login/oauth/authorize?';
//   const query = querystring.stringify(params);
//
//   return reply.redirect(base + query);
// };
