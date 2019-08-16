const Post = require("../db/schemas/post");

const getAll = () =>
  new Promise((res, rej) => {
    Post.find()
      .then(res)
      .catch(rej);
  });

module.exports = getAll;
