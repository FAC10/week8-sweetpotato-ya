// const dbConnection = require('../../database/db_connection.js');
// const addPost = require('../addPost.js');
// const loginFunc = require('../login.js');


// module.exports = {
//   method: 'GET',
//   path: '/',
//   handler: (req, reply) => {
//     dbConnection.query('SELECT posts.title AS title, posts.body AS body, users.username AS username FROM posts INNER JOIN users ON posts.user_id = users.user_id', (err, res) => {
//       if (err) return err;
//       reply.view('index', {
//         credentials: req.auth.credentials,
//         posts: res.rows,
//       });
//     });
//   },
// };
//

module.exports = {
  method: 'GET',
  path: '/',
  handler: (req, reply) => {
    reply.view('index');
  },
};
