module.exports = (app) => {
  const posts = require('../controllers/post.controller.js');
  let router = require('express').Router();

  // Create a new Post
  router.post('/', posts.create);

  app.use('/api/posts', router);
};
