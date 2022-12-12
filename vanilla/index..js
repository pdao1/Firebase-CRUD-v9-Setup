import './style.css';
import firebase from "firebase";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9m74Ngn7FI82IM2YdXPGljvGbQSMvLUY",
  authDomain: "icebase-31674.firebaseapp.com",
  databaseURL: "https://icebase-31674-default-rtdb.firebaseio.com",
  projectId: "icebase-31674",
  storageBucket: "icebase-31674.appspot.com",
  messagingSenderId: "551544382823",
  appId: "1:551544382823:web:1a5c13dee46d1ad3b13bc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);