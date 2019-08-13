const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    name: { type: String, required: true },
    desc: String
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
