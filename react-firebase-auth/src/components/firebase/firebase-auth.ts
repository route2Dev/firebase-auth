import firebase from 'firebase/app';
import 'firebase/auth';

export const createUserWithEmail = async (eamil: string, password: string) => {
  try {
    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(eamil, password);
    // await firebase.auth().currentUser?.sendEmailVerification();
    return userCredential;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const signinWithEmail = async (eamil: string, password: string) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(eamil, password);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const signOut = async () => {
  await firebase.auth().signOut();
};

export const getToken = () => firebase.auth().currentUser?.getIdToken();
