const request = require('request');
const querystring = require('querystring');
const env = require('env2')('./config.env');

module.exports = {
  method: 'GET',
  path: '/welcome{githubCode?}',
  handler: (req, reply) => {
    request.post(`https://github.com/login/oauth/access_token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${req.url.query.code}`, (err, response, body) => {
      console.log(body);
      const accessToken = querystring.parse(body).access_token;
      const headers = {
        'User-Agent': 'week8-MZ',
        Authorization: `token ${accessToken}`,
      };
      request.get({ url: 'https://api.github.com/user', headers }, (error, response, bodyString) => {
        if (error) throw error;
        const bodyObject = JSON.parse(bodyString);
        console.log('>>>>>>>', bodyObject);
      });
      reply('Hello');
    });
  },
};
