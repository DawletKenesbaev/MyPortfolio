
/////




import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAB2r6NFD6RFsCC8nWih7EwEy3eTOkR2to",
  authDomain: "clone-b0d55.firebaseapp.com",
  projectId: "clone-b0d55",
  storageBucket: "clone-b0d55.appspot.com",
  messagingSenderId: "120963949254",
  appId: "1:120963949254:web:156dc37fdf3ccb3295edc7",
  measurementId: "G-0LPG5N0C5P"
  
});

const auth = app.auth();
export { auth };
export default app;