import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBhwbMpFZAmyNkvH-cvAxzQUya8JhuOfCU",
  authDomain: "facebook-clone-da2ac.firebaseapp.com",
  projectId: "facebook-clone-da2ac",
  storageBucket: "facebook-clone-da2ac.appspot.com",
  messagingSenderId: "647155992594",
  appId: "1:647155992594:web:4b3ffa6e7dbf2edab430cb",
  measurementId: "G-20SL9C6077"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;