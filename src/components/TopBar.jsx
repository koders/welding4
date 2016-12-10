import React from 'react';

import AppComponent from './AppComponent.jsx';

class TopBar extends AppComponent {
  static css()
  {
    return `
      .topbar .topbar-left {
        background: #ffffff;
        float: left;
        text-align: center;
        height: 70px;
        position: relative;
        width: 250px;
        z-index: 1;
      }

      .navbar-default {
        background-color: #253138;
        border-radius: 0px;
        border: none;
        margin-bottom: 0px;
        padding: 0px 20px;
      }

      .topbar {
        left: 0px;
        position: fixed;
        right: 0;
        top: 0px;
        z-index: 999;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: rgba(255, 255, 255, 0.9);
        margin: 10px 0;
        font-weight: 100;
      }

      .navbar-default .navbar-left {
        padding-left: 10px;
      }

      .page-title {
        font-size: 20px;
        margin-bottom: 0px;
        margin-top: 0px;
        line-height: 70px;
        text-transform: capitalize;
      }

      .app-search {
        position: relative;
      }

      .app-search .form-control, .app-search .form-control:focus {
        border: 1px solid rgba(152, 166, 173, 0.5);
        font-size: 13px;
        height: 34px;
        color: #cccccc;
        font-weight: 300;
        padding-left: 20px;
        padding-right: 40px;
        margin-top: 18px;
        margin-left: 20px;
        background: rgba(152, 166, 173, 0.3);
        box-shadow: none;
        border-radius: 30px;
        width: 190px;
      }

      .app-search a {
        position: absolute;
        top: 7px;
        right: 20px;
        color: rgba(152, 166, 173, 0.7);
        cursor: pointer;
      }

      .title {
        font-size: 3rem;
        line-height: 70px;
        color: black;
      }
    `;
  }
  render () {
    const { title } = this.props;
    return (
      <div className="topbar">
          <div className="topbar-left">
              <div className="title">Welding</div>
          </div>

          <div className="navbar navbar-default" role="navigation">
              <div className="container">

                  <ul className="nav navbar-nav navbar-left">
                      <li>
                          <h4 className="page-title">{title}</h4>
                      </li>
                  </ul>

                  <ul className="nav navbar-nav navbar-right">
                      <li className="hidden-xs">
                          <form role="search" className="app-search">
                              <input type="text" placeholder="Search..." className="form-control"/>
                              <a><i className="fa fa-search"></i></a>
                          </form>
                      </li>
                  </ul>

              </div>
          </div>
      </div>
    )
  }
}

export default TopBar;
