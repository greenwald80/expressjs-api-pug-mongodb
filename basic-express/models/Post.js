const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  author: String,
  slug: { type: String, unique: true },
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
});

const Post = mongoose.model("Post", postSchema);
