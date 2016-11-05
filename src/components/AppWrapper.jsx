import { AppContainer } from 'react-hot-loader';
import React, { Component } from 'react';
import { Provider } from 'mobx-react';

import AppState from '../AppState';
import App from './App';

export default class AppWrapper extends Component {
  render() {
    return (
      <Provider state={AppState}>
        <AppContainer>
          <App children={this.props.children} />
        </AppContainer>
      </Provider>
    )
  }
}
