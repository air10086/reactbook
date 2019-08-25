import React from 'react';
import { Route } from 'react-router-dom';

const NotFoundLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div className="notfound-layout">
          <Component {...matchProps} />
        </div>
      )}
    />
  );
};

export default NotFoundLayout;
