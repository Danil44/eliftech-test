import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../node_modules/antd/dist/antd.css';
import App from './components/App';
import store from './redux/store';

ReactDOM.render(
  <CssBaseline>
    <Provider store={store}>
      <App />
    </Provider>
  </CssBaseline>,
  document.getElementById('root'),
);
