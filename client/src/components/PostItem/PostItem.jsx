/* eslint-disable import/no-cycle */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Fab,
  Icon,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { PostsContext } from '../Posts/Posts';

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    width: '100%',
    margin: '0 auto 35px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },

  pos: {
    marginBottom: 12,
  },
});

const PostItem = ({ name, desc, _id: id }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h3">
          {name}
        </Typography>
        <Typography component="p" variant="body1">
          {desc}
        </Typography>
      </CardContent>
      <PostsContext.Consumer>
        {({ toggleEditForm, handleDeletePost }) => (
          <CardActions>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => handleDeletePost(id)}
            >
              Delete
              <DeleteIcon className={classes.rightIcon} />
            </Button>
            <Fab
              color="secondary"
              size="small"
              onClick={() => toggleEditForm(id)}
            >
              <Icon>edit_icon</Icon>
            </Fab>
          </CardActions>
        )}
      </PostsContext.Consumer>
    </Card>
  );
};

PostItem.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
};

export default PostItem;
