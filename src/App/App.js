import React from 'react';
import firebase from 'firebase';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';

import './App.scss';

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
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <button className="btn btn-info"><i class="fab fa-react"></i> I am a button</button>
      </div>
    );
  }
}

export default App;
