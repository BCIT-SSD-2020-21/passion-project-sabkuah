import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Navigation = ({ user }) => {
  return (
    <Navbar collapseOnSelect expand='lg'>
      <Navbar.Brand href='/' id='brand-nav'>
        blockwatch
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        {user ? (
          <Nav className='ml-auto'>
            <Nav.Link className='nav-links' href='/user/communities'>
              <AccountCircleIcon /> {user?.firstName}'s Dashboard
            </Nav.Link>
          </Nav>
        ) : (
          <Nav className='ml-auto'>
            <Nav.Link className='nav-links' href='/login'>
              Login
            </Nav.Link>
            <Nav.Link className='nav-links' href='/register'>
              Register
            </Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
