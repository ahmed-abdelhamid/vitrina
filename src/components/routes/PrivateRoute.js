import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import SideBar from '../layouts/SideBar/SideBar';

const PrivateRoute = ({ isSignedIn, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props =>
      isSignedIn ? (
        <div>
          <SideBar />
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn
});

export default connect(mapStateToProps)(PrivateRoute);
