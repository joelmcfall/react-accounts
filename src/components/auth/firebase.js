import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBjgKxoGwuWHNMvOoEn8zJ4eDmNzZH8tvo",
  authDomain: "react-auth-281ad.firebaseapp.com",
  databaseURL: "https://react-auth-281ad.firebaseio.com",
  projectId: "react-auth-281ad",
  storageBucket: "react-auth-281ad.appspot.com",
  messagingSenderId: "3045537146",
  appId: "1:3045537146:web:4229449f81a0a9352092c3",
  measurementId: "G-H5XXME0R17"
};

const fireb = firebase.initializeApp(firebaseConfig);

export default fireb;
