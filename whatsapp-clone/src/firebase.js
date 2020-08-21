import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBkFz73MZj6RtGRts8QHDRuAf1_cIdzVDY",
    authDomain: "whatsapp-clone-f7c3b.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-f7c3b.firebaseio.com",
    projectId: "whatsapp-clone-f7c3b",
    storageBucket: "whatsapp-clone-f7c3b.appspot.com",
    messagingSenderId: "979781796213",
    appId: "1:979781796213:web:976cb423d0706d3c20133c",
    measurementId: "G-W1DYRNLLJ1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = new firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;