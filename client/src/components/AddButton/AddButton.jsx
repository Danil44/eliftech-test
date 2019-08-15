import React from 'react';
import { Fab, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },

  button: {
    margin: '0 auto',
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
  },
}));

const AddButton = ({ handleOpenAddForm }) => {
  const classes = useStyles();

  return (
    <Fab
      onClick={handleOpenAddForm}
      color="secondary"
      aria-label="add"
      className={classes.fab}
    >
      <AddIcon />
    </Fab>
  );
};

AddButton.propTypes = {
  handleOpenAddForm: PropTypes.func.isRequired,
};

export default AddButton;
