import firebase from 'firebase/app';
import 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyDQauNpio0YkmhEPodEoAswuf7dbzJBJ3U",
    authDomain: "to-do-18.firebaseapp.com",
    projectId: "to-do-18",
    storageBucket: "to-do-18.appspot.com",
    messagingSenderId: "905897371152",
    appId: "1:905897371152:web:135e212c61028da3a00c95"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export default db; 
  