import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4z1v0TbTL0VWvjjMRBSmXJWNlUWUOncA",
  authDomain: "deadlines-make-me-sad.firebaseapp.com",
  databaseURL: "https://deadlines-make-me-sad.firebaseio.com",
  projectId: "deadlines-make-me-sad",
  storageBucket: "deadlines-make-me-sad.appspot.com",
  messagingSenderId: "494589251815",
  appId: "1:494589251815:web:b9b83a02eee0ed303ad242"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();
