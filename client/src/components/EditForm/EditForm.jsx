/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" value={name} onChange={this.handleChange} />
        <input name="desc" value={desc} onChange={this.handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

EditForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};
