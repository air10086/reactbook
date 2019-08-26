import React, { Component } from 'react';
import { asyncComponent } from 'react-async-component';
import { Switch, Redirect, Route } from 'react-router';

import { Layout } from 'antd';
import './theme/app.scss';

import UserLayout from './layouts/UserLayout';
import NotFoundLayout from './layouts//NotFoundLayout';
import HomeLayout from './layouts/HomeLayout';

const UserComponent = asyncComponent({
  resolve: () => import('./containers/User/Login')
});

const NotFoundComponent = asyncComponent({
  resolve: () => import('./containers/NotFound')
});

const HomeComponent = asyncComponent({
  resolve: () => import('./containers/Home')
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="login" />} />
            <UserLayout path="/login" component={UserComponent} />
            <HomeLayout path="/home" component={HomeComponent} />
            <NotFoundLayout component={NotFoundComponent} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
