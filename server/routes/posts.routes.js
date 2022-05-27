const router = require("express").Router();
const {
  createPosts,
  getAllPosts,
  updatePost,
} = require("../controllers/posts.controllers");

router.post("/create", createPosts);
router.get("/", getAllPosts);
router.put("/update/:id", updatePost);

module.exports = router;
