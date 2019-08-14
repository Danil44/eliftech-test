const Post = require("../db/schemas/post");

const createPost = post =>
  new Promise((res, rej) => {
    const newPost = new Post({ ...post });

    newPost
      .save()
      .then(() => Post.find())
      .then(posts => res(posts))
      .catch(rej);
  });

module.exports = createPost;
