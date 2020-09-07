import React from 'react';
import {
  Navbar,
  Nav,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Auth from '../Auth/Auth';

class MyNavbar extends React.Component {
  render() {
    const { authed } = this.props;
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">A Few of My Favorite Things</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/new">New</Nav.Link>
                <Nav.Link as={Link} to="/stuff">Stuff</Nav.Link>
              </Nav>
              <Auth authed={authed} />
            </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default MyNavbar;
