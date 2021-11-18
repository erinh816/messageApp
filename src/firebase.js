import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAqKY8X82EiFVprGVC3J5HpvUNSZLJp6NA",
  authDomain: "message-app-992dc.firebaseapp.com",
  projectId: "message-app-992dc",
  storageBucket: "message-app-992dc.appspot.com",
  messagingSenderId: "456931451765",
  appId: "1:456931451765:web:6044aff7b81107ccb5e93c",
});

//initialize the firebase
const db = firebaseApp.firestore();

// export { db };

export default db;

//now we can use  the variable db in any of our other
