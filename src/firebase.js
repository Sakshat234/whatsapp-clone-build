// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCpW7ln1Pppf59Sx1FnsZnVlJ0dGD1PqmU",
    authDomain: "whatsapp-clone-c9501.firebaseapp.com",
    projectId: "whatsapp-clone-c9501",
    storageBucket: "whatsapp-clone-c9501.appspot.com",
    messagingSenderId: "338931338453",
    appId: "1:338931338453:web:9cc2af3f5ec956621ee65c",
    measurementId: "G-574C7JLZJ8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth= firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;