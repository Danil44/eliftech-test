const Post = require("../db/schemas/post");

const getAll = () =>
  new Promise((res, rej) => {
    Post.find()
      .then(data => {
        res(data);
        console.log(data);
      })
      .catch(rej);
  });

module.exports = getAll;
