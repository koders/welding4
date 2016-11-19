import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router';

import AppWrapper from './components/AppWrapper';
import Dashboard from './components/Dashboard';
import Orders from './components/Orders';

const rerender = () => {
  render(
      <Router history={browserHistory}>
        <Route path="/" component={AppWrapper}>
          <IndexRedirect to="/dashboard" />
          <Route path="dashboard" component={Dashboard}></Route>
          <Route path="orders" component={Orders}></Route>
        </Route>
      </Router>,
    document.getElementById('root')
  );
}

rerender();

if (module.hot) {
  module.hot.accept('./components/AppWrapper', () => {
    const NextApp = require('./components/AppWrapper').default;
    rerender();
  });
  
  module.hot.accept('./components/Dashboard', () => {
    const NextApp = require('./components/Dashboard').default;
    rerender();
  });
  
  module.hot.accept('./components/Orders', () => {
    const NextApp = require('./components/Orders').default;
    rerender();
  });
}
