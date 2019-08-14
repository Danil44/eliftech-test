export const Type = {
  GET_POSTS_START: 'GET_POSTS_START',
  GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
  GET_POSTS_ERROR: 'GET_POSTS_ERROR',

  ADD_POST_START: 'ADD_POST_START',
  ADD_POST_SUCCESS: 'ADD_POST_SUCCESS',
  ADD_POST_ERROR: 'ADD_POST_ERROR',

  EDIT_POST_START: 'EDIT_POST_START',
  EDIT_POST_SUCCESS: 'EDIT_POST_SUCCESS',
  EDIT_POST_ERROR: 'EDIT_POST_ERROR',

  DELETE_POST_START: 'DELETE_POST_START',
  DELETE_POST_SUCCESS: 'DELETE_POST_SUCCESS',
  DELETE_POST_ERROR: 'DELETE_POST_ERROR',
};

export const getPostsStart = () => ({
  type: Type.GET_POSTS_START,
});
export const getPostsSuccess = posts => ({
  type: Type.GET_POSTS_SUCCESS,
  payload: posts,
});
export const getPostsError = error => ({
  type: Type.GET_POSTS_ERROR,
  payload: { error },
});

export const addPostStart = () => ({
  type: Type.ADD_POST_START,
});
export const addPostSuccess = posts => ({
  type: Type.ADD_POST_SUCCESS,
  payload: posts,
});
export const addPostError = error => ({
  type: Type.ADD_POST_ERROR,
  payload: { error },
});

export const editPostStart = () => ({
  type: Type.EDIT_POST_START,
});
export const editPostSuccess = posts => ({
  type: Type.EDIT_POST_SUCCESS,
  payload: posts,
});
export const editPostError = error => ({
  type: Type.EDIT_POST_ERROR,
  payload: { error },
});

export const deletePostStart = () => ({
  type: Type.DELETE_POST_START,
});
export const deletePostSuccess = posts => ({
  type: Type.DELETE_POST_SUCCESS,
  payload: posts,
});
export const deletePostError = error => ({
  type: Type.DELETE_POST_ERROR,
  payload: { error },
});
