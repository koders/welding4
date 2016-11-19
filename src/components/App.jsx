import React, { cloneElement, Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { browserHistory, Route, Router, Link } from 'react-router';

import AppComponent from './AppComponent.jsx';
@observer(['state'])
class App extends AppComponent {
  static css()
  {
    return `
      body
      {
        background-color: #CCCCCC;
      }
    `;
  }
  render() {
    const { state } = this.props;
    const message = state.message;
    return (
      <div className="main-content">
        <style>{App.css()}</style>
        <div>{message}</div>
      </div>
    );
  }
};

export default App;
