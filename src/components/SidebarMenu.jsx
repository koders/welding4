import React from 'react';
import {Link} from 'react-router';

import AppComponent from './AppComponent.jsx';

class SidebarMenu extends AppComponent {
  static css()
  {
    return `
      .sidebar-menu,
      .sidebar-menu ul,
      .sidebar-menu li,
      .sidebar-menu a {
        border: 0;
        font-weight: normal;
        line-height: 1;
        list-style: none;
        margin: 0;
        padding: 0;
        position: relative;
        text-decoration: none;
      }
      
      .menu-title {
        padding: 12px 20px !important;
        letter-spacing: .035em;
        pointer-events: none;
        cursor: default;
        font-size: 13px;
      }
      
      .text-muted {
        color: #98a6ad !important;
      }
      
      .sidebar-menu > ul > li > a {
        color: #435966;
        display: block;
        padding: 12px 20px;
        margin: 4px 0px;
        border-left: 3px solid transparent;
        transition: color 200ms;
      }
      
      .sidebar-menu > ul > li > a:hover {
        color: red;
        cursor: pointer;
      }
      
      .sidbar-menu a {
        line-height: 1.3;
      }
      
      .sidebar-menu ul li a i {
        display: inline-block;
        font-size: 16px;
        line-height: 17px;
        margin-left: 3px;
        margin-right: 15px;
        text-align: center;
        vertical-align: middle;
        width: 20px;
      }
      
      .sidebar-menu > ul > li > a > span {
        vertical-align: middle;
      }
    `;
  }
  render () {
    return (
      <div className="sidebar-menu">
        <ul>
        	<li className="text-muted menu-title">Navigation</li>

          <li>
              <Link to="/dashboard"><i className="fa fa-dashboard"></i> <span> Dashboard </span> </Link>
          </li>
          <li>
              <Link to="/orders"><i className="fa fa-folder-o"></i> <span> Orders </span> </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default SidebarMenu;
