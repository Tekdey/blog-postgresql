const router = require("express").Router();
const {
  createPosts,
  getAllPosts,
} = require("../controllers/posts.controllers");

router.post("/create", createPosts);
router.get("/", getAllPosts);

module.exports = router;
