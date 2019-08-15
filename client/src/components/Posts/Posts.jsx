import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Typography } from '@material-ui/core';
import PostsList from '../PostsList/PostsList';
import EditForm from '../EditForm/EditFormContainer';
import AddPostForm from '../AddPostForm/AddPostForm';
import AddButton from '../AddButton/AddButton';
import styles from './Posts.module.css';
import hotDogImg from '../../images/happy-hot-dog.png';

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
      <Container maxWidth="md" className={styles.container}>
        <Typography variant="h4">Share with your happy hot-dog!</Typography>
        <img
          src={hotDogImg}
          alt="hot-dog picutre"
          style={{ maxWidth: '20%' }}
        />
        <PostsContext.Provider
          value={{
            toggleEditForm: this.toggleEditForm,
            handleDeletePost: this.handleDeletePost,
          }}
        >
          <PostsList posts={posts} />
        </PostsContext.Provider>

        {editFormIsOpen && (
          <EditForm
            isOpen={editFormIsOpen}
            postId={postId}
            handleSubmit={this.handleEditSubmit}
            toggleForm={this.toggleEditForm}
          />
        )}

        {addFormIsOpen && (
          <AddPostForm
            isOpen={addFormIsOpen}
            toggleForm={this.toggleAddForm}
            handleSubmit={this.handlePostSubmit}
          />
        )}

        <AddButton handleOpenAddForm={this.toggleAddForm} />
      </Container>
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
