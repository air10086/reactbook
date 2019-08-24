import React from 'react';
import { Route } from 'react-router-dom';

const NotFoundLayout = ({ component: Component, ...rest }) => {
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

export default NotFoundLayout;
