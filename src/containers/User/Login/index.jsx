import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

@withRouter
class Login extends Component {
  render() {
    return (
      <div className="login-body">
        <div className="login-content">
          <div className="left-panel" />
          <div className="right-panel">
            <img src={require('../../../images/login.png')} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
