import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCIgzpYcxwR91yfaUVCDEDvYW3CvEJ795I",
    authDomain: "ig-reels-clone-76382.firebaseapp.com",
    databaseURL: "https://ig-reels-clone-76382.firebaseio.com",
    projectId: "ig-reels-clone-76382",
    storageBucket: "ig-reels-clone-76382.appspot.com",
    messagingSenderId: "98574254775",
    appId: "1:98574254775:web:084fda8dbf74d3497a4332",
    measurementId: "G-3V5KWR3P5G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;
