const { post } = require("../../domain");

const sendSuccess = (res, data) => {
  console.log(data);
  res.send({ status: "success", posts: data });
};

const sendError = (res, error) => {
  res.status(401).send({ status: "fail", error });
};

const getAll = (req, res) => {
  return post
    .getAll()
    .then(posts => {
      sendSuccess(res, posts);
    })
    .catch(err => sendError(res, err));
};

module.exports = getAll;
