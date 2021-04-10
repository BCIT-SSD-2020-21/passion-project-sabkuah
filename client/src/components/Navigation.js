import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand='lg'>
      <Navbar.Brand href='/' id='brand-nav'>
        blockwatch
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link className='nav-links' href='/login'>
            Login
          </Nav.Link>
          <Nav.Link className='nav-links' href='/register'>
            Register
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
