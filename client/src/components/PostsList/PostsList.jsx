import React from 'react';
import PropTypes from 'prop-types';
import PostItem from '../PostItem/PostItem';
import styles from './PostsList.module.css';

const PostsList = ({ posts }) => (
  <ul className={styles.list}>
    {posts.map(post => (
      <PostItem key={post._id} {...post} />
    ))}
  </ul>
);

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

export default PostsList;
