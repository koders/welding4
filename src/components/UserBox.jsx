import React from 'react';

import AppComponent from './AppComponent.jsx';

class UserBox extends AppComponent {
  static css()
  {
    return `
      .user-box {
        text-align: center;
        padding: 30px 0px 20px 0px;
      }
      
      .user-box .user-img {
        position: relative;
        height: 88px;
        width: 88px;
        margin: 0px auto;
      }
    `;
  }
  render () {
    return (
      <div className="user-box">
        <div className="user-img">
          <img src="/assets/images/admin.png" alt="user-img" title="Mat Helme" className="img-circle img-thumbnail img-responsive"/>
          <div className="user-status offline"><i className="zmdi zmdi-dot-circle"></i></div>
        </div>
        <h5><a href="#">Admin</a> </h5>
        <ul className="list-inline">
          <li>
            <a href="#">
              <i className="fa fa-cog"></i>
            </a>
          </li>

          <li>
            <a href="#" className="text-custom">
              <i className="fa fa-power-off"></i>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default UserBox;
