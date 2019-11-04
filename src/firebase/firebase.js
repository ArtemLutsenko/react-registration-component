import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import {toastr} from 'react-redux-toastr'

const config = {
  apiKey: "AIzaSyDNezxRhlevNVuOgu5psYpD_KpfPxu8GDc",
  authDomain: "temp-db-2d79d.firebaseapp.com",
  databaseURL: "https://temp-db-2d79d.firebaseio.com",
  projectId: "temp-db-2d79d",
  storageBucket: "temp-db-2d79d.appspot.com",
  messagingSenderId: "835499827967",
  appId: "1:835499827967:web:bae9dda3ceb8b68235e2ca"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
      toastr.success('Log in', `You login as a ${displayName}`)
    } catch (error) {
      console.log(error, "error creating user");
      toastr.error("error", error)
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
