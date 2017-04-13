const addPost = require('../addPost');

module.exports = {
  method: 'POST',
  path: '/post-blog',
  handler: addPost,
};
