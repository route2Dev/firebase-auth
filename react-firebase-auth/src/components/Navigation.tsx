import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import * as ROUTES from '../constants/routes';
import { SignInSignOutLink } from './auth/SignInSignOutLink';

export const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <SignInSignOutLink />
            <LinkContainer to={ROUTES.HOME}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* <Nav.Link href={ROUTES.SIGN_IN}>Sign In</Nav.Link>

      <Nav.Link href={ROUTES.LANDING}>Landing</Nav.Link>


      <Nav.Link href={ROUTES.ACCOUNT}>Account</Nav.Link>

      <Nav.Link href={ROUTES.ADMIN}>Admin</Nav.Link> */}
    </div>
  );
};
