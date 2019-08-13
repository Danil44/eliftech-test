const express = require("express");
const app = express.Router();
const createPost = require("../controller/post/create");
const deletePost = require("../controller/post/delete");
const editPost = require("../controller/post/edit");
const getAllPosts = require("../controller/post/getAll");

app
  .get("/all-posts", getAllPosts)
  .post("/posts", createPost)
  .delete("/posts/:id", deletePost)
  .put("/posts/:id", editPost);

module.exports = app;
