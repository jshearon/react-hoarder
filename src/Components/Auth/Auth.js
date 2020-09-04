import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    return (
      <div className="Auth">
        <button className={authed ? 'btn btn-danger' : 'btn btn-warning'} onClick={authed ? this.logoutClickEvent : this.loginClickEvent}>
          {authed ? 'Log Out' : 'Login Via Google'}
        </button>
      </div>
    );
  }
}

export default Auth;
