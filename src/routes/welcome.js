const req = require('request');
const url = require('url');
const client_id = process.env.CLIENT_ID;
const bcrypt = require('bcrypt');
const server = require('../server.js');
const querystring = require('querystring');
const jwt = require('jsonwebtoken');

module.exports = {
  method: 'GET',
  path: '/welcome',
  handler: (request, reply) => {
    const query = url.parse(request.url, true).query;
    // const code = query.code;
    // console.log(query.code);
    const gitUrl = `${'https://github.com/login/oauth/access_token' + '?client_id='}${client_id}&client_secret=${process.env.CLIENT_SECRET}&code=${query.code}`;
    req(gitUrl, (err, res, body) => {
      const salt = bcrypt.genSaltSync(5);
      const hash = bcrypt.hashSync(body, salt);
      const data = { token: hash };

      const gitReqUrl = 'https://api.github.com/user';
      const parsedToken = querystring.parse(body).access_token;

      const headers = {
        'User-Agent': 'oauth_github_jwt',
        Authorization: `token ${parsedToken}`,
      };

      // console.log('token', parsedToken);
      req.get({ url: gitReqUrl, headers }, (error, response, body) => {
        // console.log('request',body);

        const options = {
          expiresIn: Date.now() + 24 * 60 * 60 * 1000,
          subject: 'github-data',
        };

        console.log('THIS IS BODY', body);
        console.log('>>>>>>>>>>', typeof body);
        const parsedBody = JSON.parse(body);

        const payload = {
          user: {
            username: parsedBody.login,
            img_url: parsedBody.avatar_url,
            user_id: parsedBody.id,
          },
          access_token: parsedToken,
        };

        jwt.sign(payload, process.env.SECRET, options, (err, token) => {
          console.log('payload', payload);

          const config = {
            path: '/',
            isSecure: process.env.NODE_ENV === 'PRODUCTION',
          };

          return reply
        .redirect('/welcome')
        .state('token', token, config);
        });
      });
      // reply('index').state('data', data);
    });
  },
};
