import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';
import { storeUser } from '../actions';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import LoginPage from './pages/LoginPage/LoginPage';
import Dashboard from './pages/Dashboard/Dashboard';
import Categories from './pages/Categories/Categories';
import Subcategories from './pages/Subcategories/Subcategories';
import Designers from './pages/Designers/Designers';
import DesignerDetail from './pages/DesignerDetails/DesignerDetail';
import Advertisments from './pages/Advertisments/Advertisements';

export const history = createBrowserHistory();

export class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div dir="rtl">
          <PublicRoute path="/" component={LoginPage} exact />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/categories" component={Categories} exact />
          <PrivateRoute
            path="/categories/:id/subcategories"
            component={Subcategories}
          />
          <PrivateRoute path="/designers" component={Designers} />
          <PrivateRoute path="/designer/:id" component={DesignerDetail} />
          <PrivateRoute path="/advertisements" component={Advertisments} />
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  storeUser: userData => dispatch(storeUser(userData))
});

const mapStateToProps = ({ auth }) => ({
  isSignedIn: auth.isSignedIn
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
