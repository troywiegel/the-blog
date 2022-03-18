const { connect, connection } = require("mongoose");

const connectionString =
  process.env.MONGODB_URI || "mongodb://localhost:27017/the-blog";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
