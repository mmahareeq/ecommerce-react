
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAZXUYaRUGlSRPI0szm9NU_fRNckdATdhQ",
    authDomain: "ecommerce-59f1b.firebaseapp.com",
    projectId: "ecommerce-59f1b",
    storageBucket: "ecommerce-59f1b.appspot.com",
    messagingSenderId: "462649221777",
    appId: "1:462649221777:web:a29a9d6f70824586b1d530",
    measurementId: "G-68WLL4HM36",
    

  };
  const app =firebase.initializeApp(firebaseConfig);

  const db = app.firestore();
  const auth = firebase.auth();
  export {db,auth};