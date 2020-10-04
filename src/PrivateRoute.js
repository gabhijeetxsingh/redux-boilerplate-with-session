import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
//import ErrorBoundary from  "../components/core/ErrorBoundary/ErrorBoundary";

const PrivateRoute = ({ component: Component, exact = false, path, authenticated }) => {
    console.log(authenticated)
    return(  <Route
        exact={exact}
        path={path}
        render={props => {
        return  (
            authenticated === true ? (
                <Component {...props} />
            ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }}/>
            )
        )}}
    />)
}

const { object, bool, string, func } = PropTypes;

PrivateRoute.propTypes = {
  component: func.isRequired,
  exact: bool,
  path: string.isRequired,
  authenticated: bool.isRequired,
  location: object
};

export default PrivateRoute;