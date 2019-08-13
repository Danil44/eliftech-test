const { post } = require("../../domain");

const sendSuccess = (res, data) => {
  res.send({ status: "success", post: data });
};

const sendError = (res, error) => {
  res.status(401).send({ status: "fail", error });
};

const editPost = (req, res) => {
  post
    .edit({ ...req.body }, req.params.id)
    .then(data => sendSuccess(res, data))
    .catch(err => sendError(res, err));
};

module.exports = editPost;
