import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAedEHgrpmLRukDLbzp40nt8Od7Duewk4Q",
    authDomain: "clone-v2-89be0.firebaseapp.com",
    databaseURL: "https://clone-v2-89be0.firebaseio.com",
    projectId: "clone-v2-89be0",
    storageBucket: "clone-v2-89be0.appspot.com",
    messagingSenderId: "402580020096",
    appId: "1:402580020096:web:5d38e073bf3e8f79d53f65",
    measurementId: "G-4HPVNF76G9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
