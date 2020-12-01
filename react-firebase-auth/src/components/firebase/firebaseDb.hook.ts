import { useContext } from 'react';
import { FirebaseContext } from './FirebaseProvider';

export const useFirebaseDb = () => {
  const firebaseDb = useContext(FirebaseContext);
  return firebaseDb;
};
