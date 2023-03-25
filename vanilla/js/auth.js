// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
// import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'
// import { getAuth } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js'
// import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
// const provider = new FacebookAuthProvider();
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
const app = firebase.initializeApp(firebaseConfig);
const db = app.database();
const fs = app.firestore();
const auth = app.auth();
auth.useDeviceLanguage();

  // Tracking auth status
  auth.onAuthStateChanged(user => {
    if (user) {
      fs.collection('Snippets').onSnapshot(snapshot => {
        snippets(snapshot.docs)
        setupUI(user)
      }, err =>{
        console.log(err.message)
      })
    } else {
      setupUI();
     snippets([]);
    }
  })

  // new entry

  const createSnippet = document.querySelector('#create-form');
  createSnippet.addEventListener('submit', (e) => {
    e.preventDefault();
    
    fs.collection('Snippets').add({
      Title: createSnippet['title'].value,
      Content: createSnippet['content'].value
    }).then(() => { 

      const modal = document.querySelector('#modal-create');
      M.Modal.getInstance(modal).close();
      createSnippet.reset();
      }).catch(err => {
        console.log('insufficient permissions')
        alert('insufficient permissions')
      })
  })

  const signUpForm = document.querySelector('#signup-form');

  // sign up, takes submit and turns it into an object event. 
  signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // assign values
  const email = signUpForm['signup-email'].value;
  const password = signUpForm['signup-password'].value;

  // creates account
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    return fs.collection('Users').doc(cred.user.uid).set({
      userID: email
      })
    }).then(() => {
      const modal = document.querySelector('#modal-signup');
      M.Modal.getInstance(modal).close();
      signUpForm.reset();
    })
  });
  
  //Logout
  const logout = document.querySelector('#logout');
  logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
  });

  // login

  const loginForm = document.querySelector('#login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

      // logging in
      auth.signInWithEmailAndPassword(email, password).then((cred) => {
          // const modal = document.querySelector('#modal-login');
          // M.Modal.getInstance(modal).close();
          loginForm.reset();
      })
  }).then(() => {
   
  })

 fs.collection('Snippets').get().then(snapshot =>{
    snippets(snapshot.docs)
 })