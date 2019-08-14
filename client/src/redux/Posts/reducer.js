import { Type } from './actions';

const initialState = [];

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Type.GET_POSTS_SUCCESS:
      return payload;

    case Type.EDIT_POST_SUCCESS:
      return payload;

    case Type.ADD_POST_SUCCESS:
      return payload;

    case Type.DELETE_POST_SUCCESS:
      return payload;

    default:
      return state;
  }
};

export default postsReducer;
