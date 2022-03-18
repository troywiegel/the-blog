const router = require("express").Router();
const {
  getBlog,
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

// blog routes

// GET all blogs
router.route("/").get(getBlogs);

// GET blog POST blog PUT blog DELETE blog
router
  .route("/blogs/:id")
  .get(getBlog)
  .post(createBlog)
  .put(updateBlog)
  .delete(deleteBlog);

module.exports = router;
