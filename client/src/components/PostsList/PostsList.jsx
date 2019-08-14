import React from 'react';
import PropTypes from 'prop-types';
import PostItem from '../PostItem/PostItem';

const PostsList = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <PostItem key={post._id} {...post} />
    ))}
  </ul>
);

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

export default PostsList;
