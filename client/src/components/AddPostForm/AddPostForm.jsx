import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, TextField } from '@material-ui/core';
import { Modal } from 'antd';
import styles from './AddPostForm.module.css';

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
    const { toggleForm, isOpen } = this.props;

    return (
      <Modal
        onOk={this.handleSubmit}
        onCancel={() => toggleForm('')}
        visible={isOpen}
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

AddPostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
};
