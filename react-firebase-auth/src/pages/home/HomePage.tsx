import React from 'react';
import { SecretsDisplay } from '../../components/auth/SecretsDisplay';
import { useSession } from '../../components/session/session.hook';

export const HomePage = () => {
  const userState = useSession();

  if (userState.initializing) {
    return null;
  }

  return (
    <div>
      {!userState.user ? (
        <h1>Howdy Stranger</h1>
      ) : (
        <React.Fragment>
          <h1>Welcome back, {userState.user.email}</h1>
          <SecretsDisplay />
        </React.Fragment>
      )}
    </div>
  );
};
