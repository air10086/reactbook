import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Select, Input, message, Form } from 'antd';
import './index.scss';

const FormItem = Form.Item;

@withRouter
@Form.create()
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panel: ''
    };
  }

  cancelReset = () => {
    this.setState({
      panel: ''
    });
  };
  //忘记密码
  forgetPassword = () => {
    this.setState({
      panel: 1
    });
  };
  //登录
  loginButton = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (err) return;
    });
  };

  //去除空格
  spaceRemove(type, value, callback) {
    if (value) {
      this.props.form.setFieldsValue({ [`${type}`]: value.trim() });
    }
    callback();
  }

  switchPanel = () => {
    const { getFieldDecorator } = this.props.form;
    switch (this.state.panel) {
      case 1:
        return [
          <div key="1" className="welcome-home">
            忘记密码
          </div>,
          <div key="2" className="login-info">
            <Form>
              <Form.Item className={'re-border-bold'}>
                {getFieldDecorator('email', {
                  rules: [
                    { type: 'email', message: '请输入合法的邮箱地址' },
                    {
                      validator: (rule, value, callback) =>
                        this.spaceRemove('email', value, callback)
                    },
                    { required: true, message: '邮箱必须填写' }
                  ]
                })(<Input placeholder="输入邮箱" />)}
              </Form.Item>
              <Form.Item className={'re-border-bold'}>
                {getFieldDecorator('password', {
                  rules: [
                    { required: true, message: '密码必须填写' },
                    {
                      validator: (rule, value, callback) =>
                        this.spaceRemove('password', value, callback)
                    }
                  ]
                })(<Input type="password" placeholder="输入密码" />)}
              </Form.Item>
              <Form.Item className={'re-border-bold'}>
                {getFieldDecorator('certainPassword', {
                  rules: [
                    { required: true, message: '密码必须填写' },
                    {
                      validator: (rule, value, callback) =>
                        this.spaceRemove('certainPassword', value, callback)
                    }
                  ]
                })(<Input type="password" placeholder="再次输入密码" />)}
              </Form.Item>
            </Form>
          </div>,
          <div key="3" className="login-footer">
            <Button type={'primary'} onClick={this.loginButton}>
              重置
            </Button>
            <div className="cancel-reset-pwd" onClick={this.cancelReset}>
              取消
            </div>
          </div>
        ];
      default:
        return [
          <div key="1" className="welcome-home">
            欢迎来到图书管理系统
          </div>,
          <div key="2" className="login-info">
            <Form>
              <Form.Item className={'re-border-bold'}>
                {getFieldDecorator('email', {
                  rules: [
                    { type: 'email', message: '请输入合法的邮箱地址' },
                    {
                      validator: (rule, value, callback) =>
                        this.spaceRemove('email', value, callback)
                    },
                    { required: true, message: '邮箱必须填写' }
                  ]
                })(<Input placeholder="请输入邮箱" />)}
              </Form.Item>
              <Form.Item className={'re-border-bold'}>
                {getFieldDecorator('password', {
                  rules: [
                    { required: true, message: '密码必须填写' },
                    {
                      validator: (rule, value, callback) =>
                        this.spaceRemove('password', value, callback)
                    }
                  ]
                })(<Input type="password" placeholder="请输入密码" />)}
              </Form.Item>
              <div>
                <a onClick={this.forgetPassword}>忘记密码？</a>
              </div>
            </Form>
          </div>,
          <div key="3" className="login-footer">
            <Button type={'primary'} onClick={this.loginButton}>
              登录
            </Button>
            <div className={'re-login'}>
              <span>还没有账号？</span>
              <a>立即注册</a>
            </div>
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

export default Login;
