import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC7MQXfJVM2J0G0-dGd_ttIPsJcgUM20Pw",
    authDomain: "clone-fa79a.firebaseapp.com",
    projectId: "clone-fa79a",
    storageBucket: "clone-fa79a.appspot.com",
    messagingSenderId: "862584536934",
    appId: "1:862584536934:web:53782da48c92a2329d52a7",
    measurementId: "G-JQGXVYV3N7"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {db, auth, provider};