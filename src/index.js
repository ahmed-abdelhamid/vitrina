import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { Dimmer, Loader } from 'semantic-ui-react';
import 'pure-react-carousel/dist/react-carousel.es.css';
// import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-css-rtl/semantic.rtl.css';
import './css/index.css';

import { storeUser } from './actions';
import reducers from './reducers';
import App from './components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

const loader = (
  <Dimmer active inverted>
    <Loader inverted size="large">
      Loading
    </Loader>
  </Dimmer>
);

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(loader, document.getElementById('root'));

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
};

const isAuth = async () => {
  try {
    const adminId = localStorage.getItem('adminId');
    if (adminId) {
      const response = await axios.get(
        `http://192.168.1.111:9090/account/getaccount?accountid=${adminId}`
      );
      store.dispatch(storeUser(response.data));
    }
    renderApp();
  } catch (e) {
    renderApp();
  }
};

isAuth();
