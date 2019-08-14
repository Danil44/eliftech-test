import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostsList from '../PostsList/PostsList';
import EditForm from '../EditForm/EditFormContainer';
import AddPostForm from '../AddPostForm/AddPostForm';

export const PostsContext = React.createContext({});

export default class Posts extends Component {
  state = { editFormIsOpen: false, postId: '', addFormIsOpen: false };

  componentDidMount() {
    const { fetchPosts } = this.props;

    fetchPosts();
  }

  toggleEditForm = id => {
    this.setState(state => ({
      editFormIsOpen: !state.editFormIsOpen,
      postId: id,
    }));
  };

  toggleAddForm = () => {
    this.setState(state => ({
      addFormIsOpen: !state.addFormIsOpen,
    }));
  };

  handleEditSubmit = editedPost => {
    const { editPost } = this.props;
    const { postId } = this.state;

    editPost(postId, { ...editedPost });

    this.toggleEditForm('');
  };

  handlePostSubmit = post => {
    const { addPost } = this.props;

    addPost({ ...post });

    this.toggleAddForm();
  };

  handleDeletePost = id => {
    const { deletePost } = this.props;

    deletePost(id);
  };

  render() {
    const { posts } = this.props;
    const { editFormIsOpen, addFormIsOpen, postId } = this.state;
    return (
      <div>
        <PostsContext.Provider
          value={{
            toggleEditForm: this.toggleEditForm,
            handleDeletePost: this.handleDeletePost,
          }}
        >
          <PostsList posts={posts} />
        </PostsContext.Provider>

        {editFormIsOpen && (
          <EditForm postId={postId} handleSubmit={this.handleEditSubmit} />
        )}

        {addFormIsOpen && <AddPostForm handleSubmit={this.handlePostSubmit} />}

        <button type="button" onClick={() => this.toggleAddForm()}>
          Add Post
        </button>
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  fetchPosts: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  addPost: PropTypes.func.isRequired,
};
