/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, TextField } from '@material-ui/core';
import { Modal } from 'antd';
import styles from './EditForm.module.css';

const getPostById = (id, posts) => posts.find(post => post._id === id);

export default class EditForm extends Component {
  state = { name: '', desc: '' };

  componentDidMount() {
    const { posts, postId } = this.props;
    const post = getPostById(postId, posts);
    this.setState({ name: post.name, desc: post.desc });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { handleSubmit } = this.props;

    handleSubmit({ ...this.state });

    this.setState({ name: '', desc: '' });
  };

  render() {
    const { name, desc } = this.state;
    const { isOpen, toggleForm } = this.props;

    return (
      <Modal
        visible={isOpen}
        onOk={this.handleSubmit}
        onCancel={() => toggleForm('')}
      >
        <div className={styles.container}>
          <Input name="name" value={name} onChange={this.handleChange} />
          <TextField
            id="filled-multiline-flexible"
            multiline
            variant="outlined"
            name="desc"
            value={desc}
            onChange={this.handleChange}
          />
        </div>
      </Modal>
    );
  }
}

EditForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
};
