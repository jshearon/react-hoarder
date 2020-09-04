import React from 'react';
import {
  Navbar,
  Nav,
} from 'react-bootstrap';
import Auth from '../Auth/Auth';

class MyNavbar extends React.Component {
  render() {
    const { authed } = this.props;
    return (
      <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="#home">A Few of My Favorite Things</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
            <Auth authed={authed} />
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default MyNavbar;
