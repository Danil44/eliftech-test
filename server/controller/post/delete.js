const { post } = require("../../domain");

const sendSuccess = (res, data) => {
  res.send({ status: "success", deleted_post: data });
};

const sendError = (res, error) => {
  res.status(401).send({ status: "fail", error });
};

const deletePost = (req, res) => {
  post
    .remove(req.params.id)
    .then(data => sendSuccess(res, data))
    .catch(err => sendError(res, err));
};

module.exports = deletePost;
