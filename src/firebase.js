import firebase from "firebase";
import { createContext } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyCeyWNfV866J_UXcY8ECVJweTfpnPD2d9A",
    authDomain: "pinterest-13b6e.firebaseapp.com",
    projectId: "pinterest-13b6e",
    storageBucket: "pinterest-13b6e.appspot.com",
    messagingSenderId: "148658828218",
    appId: "1:148658828218:web:51057843e4351e76a7a383"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export const FirebaseContext = createContext(null);
export { auth, provider };
export default db;