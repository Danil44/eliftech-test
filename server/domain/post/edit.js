const Post = require("../db/schemas/post");

const editPost = (data, id) =>
  new Promise((res, rej) => {
    Post.updateOne({ _id: id }, { ...data })
      .then(() => Post.find())
      .then(posts => res(posts))
      .catch(rej);
  });

module.exports = editPost;
