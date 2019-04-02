import React from 'react';
import { Route } from 'react-router-dom';

const UserLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div className="user-layout">
          <Component {...matchProps} />
        </div>
      )}
    />
  );
};

export default UserLayout;
