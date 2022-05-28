import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQauNpio0YkmhEPodEoAswuf7dbzJBJ3U",
  authDomain: "to-do-18.firebaseapp.com",
  projectId: "to-do-18",
  storageBucket: "to-do-18.appspot.com",
  messagingSenderId: "905897371152",
  appId: "1:905897371152:web:135e212c61028da3a00c95",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();
export const auth = firebase.auth();
