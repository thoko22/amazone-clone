import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAWn-1CplwTOBe8J266nCanUPopy99rQkM",
    authDomain: "thoko--clone-fb364.firebaseapp.com",
    projectId: "thoko--clone-fb364",
    storageBucket: "thoko--clone-fb364.appspot.com",
    messagingSenderId: "380326391876",
    appId: "1:380326391876:web:83fc25f18e273ad87ccc11",
    measurementId: "G-S777VFE0EN"
  };

  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};