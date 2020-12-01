import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSession } from '../session/session.hook';
import * as ROUTES from '../../constants/routes';
import { signOut } from '../firebase/firebase-auth';
import { useHistory } from 'react-router-dom';

export const SignInSignOutLink = () => {
  const session = useSession();
  const history = useHistory();

  const handleSignOut = async () => {
    await signOut();
    history.push(ROUTES.HOME);
  };

  return (
    <React.Fragment>
      {!session.user ? (
        <LinkContainer to={ROUTES.SIGN_IN}>
          <Nav.Link>Sign In</Nav.Link>
        </LinkContainer>
      ) : (
        <button className="btn btn-link" onClick={handleSignOut}>
          Sign Out
        </button>
      )}
    </React.Fragment>
  );
};
