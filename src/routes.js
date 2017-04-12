const addPost = require('./addPost.js');
const loginFunc = require('./login.js');
//
// const styles = {
//   method: 'GET',
//   path: '../public/{file*}',
//   handler: (req, reply) => {
//     reply.file('styles');
//   },
// };
//
// const loginPage = {
//   method: 'GET',
//   path: '/login-page',
//   handler: (req, reply) => {
//     reply.view('login-page');
//   },
// };
//
// const login = {
//   method: 'POST',
//   path: '/login',
//   handler: loginFunc,
// };

// const createPost = {
//   method: 'GET',
//   path: '/create-post',
//   handler: (req, reply) => {
//     if (req.auth.isAuthenticated) {
//       reply.view('create-post', {
//         credentials: req.auth.credentials,
//       });
//     } else {
//       reply.redirect('/login-page');
//     }
//   },
// };
//
// const postBlog = {
//   method: 'POST',
//   path: '/post-blog',
//   handler: addPost,
// };
//
// const logout = {
//   method: 'GET',
//   path: '/logout',
//   handler: (req, reply) => {
//     req.cookieAuth.clear();
//     reply.redirect('/');
//   },
// };


module.exports = [
  require('./routes/home'),
  require('./routes/login'),
  require('./routes/welcome')
  // createPost,
  // logout,
  // postBlog,
];
