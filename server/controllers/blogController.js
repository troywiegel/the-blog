const Blog = require("../models/Blog");

// GET one blog by id
const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({ _id: req.params.id });
    if (!blog) {
      res.status(404).json({ message: "Sorry! Blog not found." });
    }
    res.status(200).json(blog);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// GET all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    if (!blogs) {
      res.status(404).json({ message: "Sorry! Blogs not found." });
    }
    res.status(200).json(blogs);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// POST new blog
const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(200).json({ blog });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// PUT update blog by id
const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    if (!blog) {
      res.status(404).json({ message: "Sorry! Blog not found." });
    }
    res.status(200).json(blog);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// DELETE blog by id
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findOneAndDelete({ _id: req.params.id });
    if (!blog) {
      res.status(404).json({ message: "Sorry! Blog not found." });
    }
    res.status(200).json({ message: "Blog deleted!" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = { getBlog, getBlogs, createBlog, updateBlog, deleteBlog };
