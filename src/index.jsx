import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router';

import AppWrapper from './components/AppWrapper';

const rerender = () => {
  render(
      <Router history={browserHistory}>
        <Route path="/" component={AppWrapper}>

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
}
