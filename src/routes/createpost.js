module.exports = {
  method: 'GET',
  path: '/create-post',
  handler: (req, reply) => {
    if (req.auth.isAuthenticated) {
      reply.view('create-post', {
        credentials: req.auth.credentials,
      });
    } else {
      reply.redirect('/login');
    }
  },
};
