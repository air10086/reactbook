import React, { Component } from 'react';
import { asyncComponent } from 'react-async-component';
import { Switch } from 'react-router-dom';
import { Layout } from 'antd';
import './theme/app.scss';

import UserLayout from './layouts/UserLayout';

const UserComponent = asyncComponent({
  resolve: () => import('./containers/User/Login')
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <UserLayout path="/login" component={UserComponent} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
