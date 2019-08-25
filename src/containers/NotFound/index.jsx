import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss';

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <Button className="back-btn" type={'primary'} onClick={this.goBack}>
            返回
          </Button>
          <Link to="/home">
            <Button className="home-btn">首页</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default index;
