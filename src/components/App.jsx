import React, { cloneElement, Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { browserHistory, Route, Router, Link } from 'react-router';

import AppComponent from './AppComponent.jsx';
import TopBar from './TopBar.jsx';
import LeftSideMenu from './LeftSideMenu.jsx';

@observer(['state'])
class App extends AppComponent {
  static css()
  {
    return `
      * {
        outline: none !important;
      }

      body {
        background: ${this.color1};
        font-family: 'Roboto', sans-serif;
        font-weight: 100;
        margin: 0;
        padding-bottom: 60px;
        overflow-x: hidden;
        color: #98a6ad;
      }

      .content {
        padding: 0px 5px;
        margin-top: 73px;
        margin-left: 250px;
        overflow: hidden;
      }

      ${TopBar.css()}
      ${LeftSideMenu.css()}

    `;
  }
  componentDidMount() {
    Waves.attach('.btn', 'waves-light');
    Waves.init();
  }
  componentDidUpdate() {
    Waves.attach('.btn', 'waves-light');
  }
  render() {
    const { state } = this.props;
    const message = state.message;
    return (
      <div className="main-content">
        <style>{App.css()}</style>
        <TopBar />
        <LeftSideMenu />
        <div className="content">
          <div className="main-container">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
};

export default App;
