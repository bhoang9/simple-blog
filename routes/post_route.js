const express = require('express');
const router = express.Router();

const post_controller = require('../controllers/post_controller');

//Router for main index
router.get("/", post_controller.serve_main);

//Router for new page
router.get("/getBlogPost", post_controller.serve_blog_post);

//Router for creating a new post
router.post('/addPost', post_controller.post_create);

//Router for deleting a post
router.delete('/deletepost', post_controller.post_delete);

//Export this router to be used in main app.js
module.exports = router;