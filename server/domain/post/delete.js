const Post = require("../db/schemas/post");

const deletePost = id =>
  new Promise((res, rej) => {
    Post.deleteOne({ _id: id })
      .then(res)
      .catch(rej);
  });

module.exports = deletePost;
