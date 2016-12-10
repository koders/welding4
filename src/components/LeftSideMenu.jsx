import React from 'react';

import AppComponent from './AppComponent.jsx';
import UserBox from './UserBox';
import SidebarMenu from './SidebarMenu';

class LeftSideMenu extends AppComponent {
  static css()
  {
    return `
      .side-menu {
        top: 70px;
        width: 250px;
        z-index: 2;
        background: #ffffff;
        bottom: 50px;
        height: 100%;
        margin-bottom: -70px;
        margin-top: 0px;
        padding-bottom: 70px;
        position: fixed;
        box-shadow: 0 0px 24px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
      }

      ${UserBox.css()}
      ${SidebarMenu.css()}
    `;
  }
  render () {
    return (
      <div className="side-menu">
        <UserBox />
        <SidebarMenu {...this.props} />
      </div>
    )
  }
}

export default LeftSideMenu;
