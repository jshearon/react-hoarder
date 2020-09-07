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
import authData from '../helpers/data/authData';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const RoutesContainer = ({ authed, uid }) => {
  if (authed === null) {
    return (
      <div className="fas fa-spinner fa-spin" id="spinner" />
    );
  }
  return (
    <div className="container">
      <Switch>
        <PrivateRoute path='/new' component={New} authed={authed} />
        <PrivateRoute path='/stuff' component={MyStuff} authed={authed} />
        <PrivateRoute path='/single/:stuffId' component={SingleStuff} authed={authed} />
        <PrivateRoute path='/edit/:stuffId' component={Edit} authed={authed} />
        <PrivateRoute path='/home' component={Home} authed={authed} exact />
        <PublicRoute path='/login' component={Login} authed={authed} />
        <Redirect from="*" to="/home"/>
      </Switch>
    </div>
  );
};

class App extends React.Component {
  state = {
    authed: null,
    uid: null,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      user ? this.setState({ authed: true, uid: authData.getUid() }) : this.setState({ authed: false, uid: null });
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed, uid } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar authed={authed} />
            <RoutesContainer authed={authed} uid={uid} />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
