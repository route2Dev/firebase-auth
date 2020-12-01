import React from 'react';
import firebase from 'firebase/app';
import { useAuth } from './auth.hook';

export interface UserContextValue {
  user: firebase.User | null;
  initializing: boolean;
}

export const UserContext = React.createContext<UserContextValue>({
  user: null,
  initializing: true,
});

export const AuthProvider: React.FC = ({ children }) => {
  const userState = useAuth();
  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
};
