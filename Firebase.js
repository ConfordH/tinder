import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAeaR0FZlBwnbDzxs7m70ruyP2fw1VXxtY",
  authDomain: "tinder-clone-853e7.firebaseapp.com",
  projectId: "tinder-clone-853e7",
  storageBucket: "tinder-clone-853e7.appspot.com",
  messagingSenderId: "652873858480",
  appId: "1:652873858480:web:2a9da5ea503a08bb5e6a75",
  measurementId: "G-ZSRWWYMV26",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
