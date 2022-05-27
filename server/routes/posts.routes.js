const router = require("express").Router();
const {
  createPosts,
  getAllPosts,
  getPostByAuthor,
  updatePost,
  deletePost,
} = require("../controllers/posts.controllers");

router.post("/create", createPosts);
router.get("/", getAllPosts);
router.get("/:author", getPostByAuthor);
router.put("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);

module.exports = router;
