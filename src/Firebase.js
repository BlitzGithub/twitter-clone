import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZDPAo9cMD944uaDVRdpJDAfZPFkU85ls",
  authDomain: "chirper-23476.firebaseapp.com",
  projectId: "chirper-23476",
  storageBucket: "chirper-23476.appspot.com",
  messagingSenderId: "614606591016",
  appId: "1:614606591016:web:47d18d6ba319e4a5ea511d",
  measurementId: "G-B30K6CY1V7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
