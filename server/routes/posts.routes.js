const router = require("express").Router();
const {
  createPosts,
  getPost,
  updatePost,
  deletePost,
} = require("../controllers/posts.controllers");

router.get("/", getPost);
router.post("/create", createPosts);
router.put("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);

module.exports = router;
