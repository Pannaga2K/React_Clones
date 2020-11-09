import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdrJQUkINPny0T-As2DjdezvXu3QfHD7Y",
    authDomain: "ubisoft-clone.firebaseapp.com",
    databaseURL: "https://ubisoft-clone.firebaseio.com",
    projectId: "ubisoft-clone",
    storageBucket: "ubisoft-clone.appspot.com",
    messagingSenderId: "257137849965",
    appId: "1:257137849965:web:d3d047b0323f2b574a3164",
    measurementId: "G-SH8R3MCC9G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

const auth = new firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
// export default db;