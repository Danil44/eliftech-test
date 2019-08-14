import React, { Component } from 'react';

export default class AddPostForm extends Component {
  state = { name: '', desc: '' };

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
        <button type="submit">Add</button>
      </form>
    );
  }
}
