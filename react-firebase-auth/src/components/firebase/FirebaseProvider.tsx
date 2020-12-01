import React from 'react';
import FirebaseDb from './firebaseDb';

export const FirebaseContext = React.createContext<FirebaseDb | null>(null);

interface Props {
  firebaseDb: FirebaseDb;
}

export const FirebaseProvider: React.FC<Props> = ({ firebaseDb, children }) => {
  return (
    <FirebaseContext.Provider value={firebaseDb}>
      {children}
    </FirebaseContext.Provider>
  );
};
