const { Schema, model } = require("mongoose");

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

const Blog = model("blog", blogSchema);

module.exports = Blog;
