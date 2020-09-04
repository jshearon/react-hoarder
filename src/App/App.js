import React from 'react';
import firebase from 'firebase';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';

import './App.scss';
import MyNavbar from '../Components/Navbar/Navbar';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

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
        <MyNavbar authed={authed}/>
      </div>
    );
  }
}

export default App;
