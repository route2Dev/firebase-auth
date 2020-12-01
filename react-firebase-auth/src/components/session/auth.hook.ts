import React, { useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

export const useAuth = () => {
  const [state, setState] = React.useState(() => {
    const user = firebase.auth().currentUser;
    return {
      initializing: !user,
      user,
    };
  });

  const onChange = (user: firebase.User | null) => {
    setState({ initializing: false, user });
  };

  useEffect(() => {
    // listen for auth state changes
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange);

    // unsubscribe to the listener when unmounting
    return () => unsubscribe();
  }, []);

  return state;
};
