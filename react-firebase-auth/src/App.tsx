import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { AuthProvider } from './components/session/AuthProvider';
import * as ROUTES from './constants/routes';
import { HomePage } from './pages/home/HomePage';
import { SignInPage } from './pages/sign-in/SignInPage';
import { SignUpPage } from './pages/sign-up/SignUpPage';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <hr />
        <div className="container">
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route
            exact
            PATH={ROUTES.LANDING}
            render={() => <Redirect to={ROUTES.HOME} />}
          />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
