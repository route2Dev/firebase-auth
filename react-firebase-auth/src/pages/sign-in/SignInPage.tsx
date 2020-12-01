import React from 'react';
import { SignUpLink } from '../sign-up/SignUpLink';
import { SignInForm } from './SignInForm';

export const SignInPage = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <SignInForm />
      <div className="row pt-3">
        <div className="col">
          <SignUpLink />
        </div>
      </div>
    </div>
  );
};
