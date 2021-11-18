import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCO5gWFEfXVkjreMVTFQyxCC3CDRYkPyzE",
  authDomain: "e-commerce-80950.firebaseapp.com",
  projectId: "e-commerce-80950",
  storageBucket: "e-commerce-80950.appspot.com",
  messagingSenderId: "769815808845",
  appId: "1:769815808845:web:85df0ab5d7dbe28452c504",
  measurementId: "G-WMQZ03TJDB",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
