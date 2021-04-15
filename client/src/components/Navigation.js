import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Avatar } from '@material-ui/core';

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
              <div className='row align-items-center'>
                <Avatar src={user?.avatar} className='mx-2 avatar-shadow' />{' '}
                {user?.firstName}
                's Dashboard
              </div>
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
