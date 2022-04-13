import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import cookie from 'react-cookies';

const PrivateRoute = ({ render: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        cookie.load('connect.sid') !== undefined ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

const PublicRoute = ({ render: Component, ...rest }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export { PrivateRoute, PublicRoute };
