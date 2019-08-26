import React, { Component } from 'react';
import { Menu, Layout, Avatar, Dropdown, Button } from 'antd';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { toJS } from 'mobx';
import './index.scss';

const { Header } = Layout;

// const menu = (
//   <Menu onClick={handleClick}>
//     <Menu.Item key="1">
//       <a>修改密码</a>
//     </Menu.Item>
//     <Menu.Item key="2">
//       <a>注销</a>
//     </Menu.Item>
//   </Menu>
// );

@inject('userStore')
@observer
@withRouter
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  async componentDidMount() {
    const ifLogin = await this.props.userStore.checkIfLogin();
    if (ifLogin) {
      this.setState({
        user: toJS(this.props.userStore.user)
      });
    } else {
      this.props.history.push('/login');
    }
  }

  handleClick = ({ key }) => {
    switch (key) {
      case '2':
        this.props.userStore.reset();
        this.props.history.push('/login');
        break;

      default:
        break;
    }
  };

  getMenus = () => {
    return (
      <Menu onClick={this.handleClick}>
        <Menu.Item key="1">
          <a>个人中心</a>
        </Menu.Item>
        <Menu.Item key="2">
          <a>注销</a>
        </Menu.Item>
      </Menu>
    );
  };

  render() {
    return (
      <div>
        <Header>
          <Dropdown overlay={this.getMenus} placement="bottomRight">
            <div className="user-avatar">
              <Avatar src={this.state.user.userImg} />
              <span>{this.state.user.username}</span>
            </div>
          </Dropdown>

          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">
              <Link to="/home">首页</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/borrow">借阅管理</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/book">图书管理</Link>
            </Menu.Item>
          </Menu>
        </Header>
      </div>
    );
  }
}

export default index;
