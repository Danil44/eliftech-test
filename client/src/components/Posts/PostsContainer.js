import { connect } from 'react-redux';
import {
  fetchPosts,
  editPost,
  addPost,
  deletePost,
} from '../../redux/Posts/operations';
import { getPostsFromState } from '../../redux/Posts/selectors';
import Posts from './Posts';

const mapStateToProps = state => ({
  posts: getPostsFromState(state),
});

const mapDispatchToProps = {
  fetchPosts,
  editPost,
  addPost,
  deletePost,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
