const connection = require("../config/connection");
const Blog = require("../models/Blog");

// Creates a connection to mongodb
connection.once("open", async () => {
  // user array to populate Blog collection
  const blogs = [
    {
      title: "Breaking the rules...",
      body: "I mean, it's sort of exciting, isn't it, breaking the rules?",
      author: "Hermione",
    },
    {
      title: "Goodness",
      body: "Dobby has heard of your greatness, sir, but of your goodness, Dobby never knew.",
      author: "Dobby",
    },
    {
      title: "Dreams",
      body: "It does not do well to dwell on dreams and forget to live.",
      author: "Albus",
    },
    {
      title: "Secret secret...",
      body: "Mischief Managed!",
      author: "Harry",
    },
  ];

  // waiting for users and thoughts to be inserted into the database
  await Blog.collection.insertMany(blogs);

  console.table(blogs);
  process.exit(0);
});
