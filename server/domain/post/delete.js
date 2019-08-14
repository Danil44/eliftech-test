const Post = require("../db/schemas/post");

const deletePost = id =>
  new Promise((res, rej) => {
    Post.deleteOne({ _id: id })
      .then(() => Post.find())
      .then(posts => res(posts))
      .catch(rej);
  });

module.exports = deletePost;
