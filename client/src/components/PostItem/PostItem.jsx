/* eslint-disable import/no-cycle */
import React from 'react';
import { PostsContext } from '../Posts/Posts';

const PostItem = ({ name, desc, _id: id }) => (
  <div>
    <PostsContext.Consumer>
      {({ toggleEditForm, handleDeletePost }) => (
        <div>
          <button type="button" onClick={() => toggleEditForm(id)}>
            Edit Post
          </button>

          <button type="button" onClick={() => handleDeletePost(id)}>
            Delete
          </button>
        </div>
      )}
    </PostsContext.Consumer>

    <h2>{name}</h2>
    <p>{desc}</p>
  </div>
);

export default PostItem;
