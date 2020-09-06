import React from 'react';
import {
  Navbar,
} from 'react-bootstrap';
import Auth from '../Auth/Auth';

class MyNavbar extends React.Component {
  render() {
    const { authed } = this.props;
    return (
      <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="/">A Few of My Favorite Things</Navbar.Brand>
            <Auth authed={authed} />
        </Navbar>
    );
  }
}

export default MyNavbar;
