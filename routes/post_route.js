const express = require('express');
const router = express.Router();

const post_controller = require('../controllers/post_controller');

//Router for main index
router.get("/", post_controller.serve_main);

//Router for creating a new post
router.post('/addPost', post_controller.post_create);

//Export this router to be used in main app.js
module.exports = router;