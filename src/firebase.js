import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAiz7ul21dwj0BNQMjvupt82UE1EWFzx8M",
    authDomain: "for-git.firebaseapp.com",
    projectId: "for-git",
    storageBucket: "for-git.appspot.com",
    messagingSenderId: "736491511613",
    appId: "1:736491511613:web:25ec10f7148d43a7f0ef54",
    measurementId: "G-MYPJ3NBPD8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };