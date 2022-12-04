import firebase from "firebase/app";
import './style.css';
import javascriptLogo from './javascript.svg'
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
firebase.initializeApp(firebaseConfig);
let firebaseRef = firebase.database().ref('email')
document.querySelector('#submit').addEventListener('click', () => { 
  const email = document.getElementById('email').value;
  firebaseRef.push(email);
})

export default module;