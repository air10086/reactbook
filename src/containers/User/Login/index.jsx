import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Select, Input, message, Form } from 'antd';

const FormItem = Form.Item;

@withRouter
@Form.create()
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panel: 1
    };
  }

  switchPanel = () => {
    const { getFieldDecorator } = this.props.form;
    switch (this.state.panel) {
      default:
        return [
          <div key="1">欢迎来到图书管理系统</div>,
          <div key="2">
            <Form>
              <Form.Item>
                {getFieldDecorator('email', {
                  rules: [
                    { type: 'email', message: '请输入合法的邮箱地址' },
                    { required: true, message: '邮箱必须填写' }
                  ]
                })}
              </Form.Item>
            </Form>
          </div>
        ];
    }
  };
  render() {
    return (
      <div className="login-body">
        <content className="login-content">
          <div className="left-panel">{this.switchPanel()}</div>
          <div className="right-panel">
            <img src={require('../../../images/login.png')} alt="" />
          </div>
        </content>
        <footer className="login-footer">
          Copyright © 2019 github:&nbsp;
          <a href="https://github.com/air10086/reactbook" target="blank">
            air10086
          </a>
          &nbsp;欢迎star
        </footer>
      </div>
    );
  }
}

export default Login;
