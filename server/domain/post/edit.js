const Post = require("../db/schemas/post");

const editPost = (data, id) =>
  new Promise((res, rej) => {
    Post.updateOne({ _id: id }, { ...data })
      .then(() => Post.findOne({ _id: id }))
      .then(editedPost => res(editedPost))
      .catch(rej);
  });

module.exports = editPost;
