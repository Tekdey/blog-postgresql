const router = require("express").Router();
const { createPosts } = require("../controllers/posts.controllers");

router.post("/create", createPosts);

module.exports = router;
