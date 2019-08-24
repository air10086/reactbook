import React, { Component } from 'react';
import { asyncComponent } from 'react-async-component';
import { Switch, Redirect, Route } from 'react-router';
import { Layout } from 'antd';
import './theme/app.scss';

import UserLayout from './layouts/UserLayout';
import NotFoundLayout from './layouts//NotFoundLayout';

const UserComponent = asyncComponent({
  resolve: () => import('./containers/User/Login')
});
const NotFoundComponent = asyncComponent({
  resolve: () => import('./containers/NotFound')
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="login" />} />
            <UserLayout path="/login" component={UserComponent} />
            <NotFoundLayout path="*" component={NotFoundComponent} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
