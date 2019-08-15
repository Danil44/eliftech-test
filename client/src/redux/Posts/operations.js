import axios from 'axios';
import {
  getPostsStart,
  getPostsSuccess,
  getPostsError,
  editPostStart,
  editPostSuccess,
  editPostError,
  addPostStart,
  addPostSuccess,
  addPostError,
  deletePostStart,
  deletePostSuccess,
  deletePostError,
} from './actions';

export const fetchPosts = () => dispatch => {
  dispatch(getPostsStart());

  return axios
    .get('/all-posts')
    .then(({ data }) => dispatch(getPostsSuccess(data.posts)))
    .catch(err => dispatch(getPostsError(err)));
};

export const addPost = post => dispatch => {
  dispatch(addPostStart());

  return axios
    .post('/posts', post)
    .then(({ data }) => dispatch(addPostSuccess(data.posts)))
    .catch(err => dispatch(addPostError(err)));
};

export const editPost = (postId, editedPost) => dispatch => {
  dispatch(editPostStart());

  return axios
    .put(`/posts/${postId}`, editedPost)
    .then(({ data }) => dispatch(editPostSuccess(data.posts)))
    .catch(err => dispatch(editPostError(err)));
};

export const deletePost = postId => dispatch => {
  dispatch(deletePostStart());

  return axios
    .delete(`/posts/${postId}`)
    .then(({ data }) => dispatch(deletePostSuccess(data.posts)))
    .catch(err => dispatch(deletePostError(err)));
};
