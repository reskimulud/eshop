import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdShoppingCart, MdPerson } from 'react-icons/md';
import Links from './Links';

function NavBar({ isLogedIn }) {
  return (
    <Navbar className='mb-3' bg="light" expand="lg">
      <Container>
        <Links navbarBrand to='/'>eShop</Links>
        <Nav>
          {isLogedIn ?
            <>
              <Links className='me-3' to='/cart'>
                <MdShoppingCart />
              </Links>
              <Links to='/profile'>
                <MdPerson />
              </Links>
            </>
            :
            <>
              <Links btnOutlinePrimary className='me-3' to='/auth/login'>
                Login
              </Links>
              <Links btnPrimary to='/auth/register'>
                Register
              </Links>
            </>
          }
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
