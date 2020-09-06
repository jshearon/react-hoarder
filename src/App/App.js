import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

// import Home from '../components/Home/Home';
import New from '../components/New/New';
import Home from '../components/Home/Home';
import MyStuff from '../components/MyStuff/MyStuff';
import MyNavbar from '../components/Navbar/Navbar';
import Edit from '../components/Edit/Edit';
import SingleStuff from '../components/SingleStuff/SingleStuff';
import Login from '../components/Login/Login';

import fbConnection from '../helpers/data/connection';

import './App.scss';

fbConnection();

const PublicRoute = ({ component: Component, ...rest }) => {
  const routeChecker = (props) => (
    props.authed
      ? (<Component {...props} />)
      : (<Redirect to={{ pathname: '/', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const routeChecker = (props) => (
    props.authed
      ? (<Component {...props} />)
      : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

class App extends React.Component {
  state = { authed: false }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      user ? this.setState({ authed: true }) : this.setState({ authed: false });
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar authed={authed} />
            <div className="container">
            <Switch>
              <PublicRoute path='/login' component={Login} authed={authed} />
              <PrivateRoute path='/new' component={New} authed={authed} />
              <PrivateRoute path='/stuff' component={MyStuff} authed={authed} />
              <PrivateRoute path='/singleStuff/:stuffId' component={SingleStuff} authed={authed} />
              <PrivateRoute path='/edit/:stuffId' component={Edit} authed={authed} />
              <PublicRoute path='/home' component={Home} authed={authed} exact />
            </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
