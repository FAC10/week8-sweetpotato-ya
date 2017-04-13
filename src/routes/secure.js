const dbConnection = require('../../database/db_connection.js');
// const credentials = require('hapi-context-credentials');

module.exports = {
  method: 'GET',
  path: '/secure',
  handler: (req, reply) => {
    dbConnection.query('SELECT posts.title AS title, posts.body AS body, users.username AS username FROM posts INNER JOIN users ON posts.user_id = users.user_id', (err, res) => {
      if (err) return err;
      reply.view('indexsecure', {
        credentials: req.auth.credentials,
        posts: res.rows,
      });
    });
  },
};
