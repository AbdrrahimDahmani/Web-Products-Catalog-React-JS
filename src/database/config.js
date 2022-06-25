// Import the functions you need from the SDKs you need
import * as firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyD99r4LucSkJNaEd28N5P9lQCJwVlCBCPM",
    authDomain: "photowall-cfa41.firebaseapp.com",
    databaseURL: "https://photowall-cfa41-default-rtdb.firebaseio.com",
    projectId: "photowall-cfa41",
    storageBucket: "photowall-cfa41.appspot.com",
    messagingSenderId: "864496332137",
    appId: "1:864496332137:web:f746f4728b319e2568a1f8",
    measurementId: "G-6QSM44KQBS"
};

// Initialize Firebase
firebase.initializeApp(config);
const database = firebase.database()
export { database }