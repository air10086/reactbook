import React, { Component } from 'react';
import './footer.scss';

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="login-footer">
          Copyright © 2019毕业设计 github:&nbsp;
          <a href="https://github.com/air10086/reactbook" target="blank">
            air10086
          </a>
          &nbsp;欢迎star
        </footer>
      </div>
    );
  }
}

export default Footer;
