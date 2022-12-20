

// var ui = new firebaseui.auth.AuthUI(firebase.auth());
// ui.start('#sign-up', {
// signInOptions: [
//   firebase.auth.EmailAuthProvider.PROVIDER_ID,
//   firebase.auth.FacebookAuthProvider.PROVIDER_ID
// ]
// });
// const auth = () => {
// firebase.auth().useDeviceLanguage();

// signInWithPopup(auth, provider)
//   .then((result) => {
//     // The signed-in user info.
//     const user = result.user;

//     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//     const credential = FacebookAuthProvider.credentialFromResult(result);
//     const accessToken = credential.accessToken;

//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = FacebookAuthProvider.credentialFromError(error);

//     // ...
//   });

// const provider = new FacebookAuthProvider();
// provider.addScope('user_birthday');


        // Sign up

        const signUpForm = document.querySelector('#signup-form');

        // sign up, takes submit and turns it into an object event. 
        signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // assign values
        const email = signUpForm['signup-email'].value;
        const password = signUpForm['signup-password'].value;

        // creates account
        auth.createUserWithEmailAndPassword(email, password).then(cred=>{
          console.log(cred.user);

          // close the signup modal & reset form
          const modal = document.querySelector('#modal-signup');
          M.Modal.getInstance(modal).close();
          signUpForm.reset();
          })
        });