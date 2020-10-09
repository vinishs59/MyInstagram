import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBc5Ma7qqwtTAGjGPCUSW3thjKVYkH2NK4",
    authDomain: "instagram-dd93b.firebaseapp.com",
    databaseURL: "https://instagram-dd93b.firebaseio.com",
    projectId: "instagram-dd93b",
    storageBucket: "instagram-dd93b.appspot.com",
    messagingSenderId: "578914881154",
    appId: "1:578914881154:web:d4cb0301049aaa323fae9b",
    measurementId: "G-EK4M9FSKM0"
  });

  const db =   firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db,auth,storage, firebase as default};