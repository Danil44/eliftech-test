import { connect } from 'react-redux';
import EditForm from './EditForm';
import { getPostsFromState } from '../../redux/Posts/selectors';

const mapStateToProps = state => ({
  posts: getPostsFromState(state),
});

export default connect(mapStateToProps)(EditForm);
