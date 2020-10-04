import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch} from 'react-router-dom';
//import PrivateRoute from "./PrivateRoute";
import './App.css';
import Login from './Login/Login';
import App from './App';

class Router extends Component {

  render () {
    console.log(this.props)
    const {authenticated} = this.props;
    return (
      <Router>
            <main className="main-content">
              <Switch>
                {/* <PrivateRoute exact path="/redux" component={() => <App/>} authenticated={authenticated}/> */}
                {/* <Route path="/login" component={Login}/>  */}
                {/* {authenticated && (<Redirect from="/"  to="/redux" exact />)} */}
                {authenticated && (<Redirect from="/login"  to="/redux" exact />)}
                {/* {!authenticated && (<Route path="/login" component={Login}/>)} */}
                <Route path="/login" component={Login}/> 
                {authenticated && (<Route path="/redux" component={App}/>)}

              </Switch>
            </main>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const { session } = state;
  return {
    checked: session.checked,
    authenticated: session.authenticated,
  }
};


export default connect(mapStateToProps)(Router);
