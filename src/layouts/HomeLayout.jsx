import React from 'react';
import { Route } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
import Footer from '../component/Footer/footer';
import Header from '../component/Header/index';
const { Content } = Layout;

const HomeLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div className="user-layout">
          <Layout className="layout">
            <Header />
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 480 }}>
                <Component {...matchProps} />
              </div>
            </Content>
            <Footer />
          </Layout>
        </div>
      )}
    />
  );
};
export default HomeLayout;
