import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDFkFULemz5ieL90IObEjCwLjfsUf1FugM",
  authDomain: "ecommerse-db.firebaseapp.com",
  databaseURL: "https://ecommerse-db.firebaseio.com",
  projectId: "ecommerse-db",
  storageBucket: "ecommerse-db.appspot.com",
  messagingSenderId: "758953313950",
  appId: "1:758953313950:web:976f4638c4c09485169d8f",
  measurementId: "G-SQFWKVRNTC"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;