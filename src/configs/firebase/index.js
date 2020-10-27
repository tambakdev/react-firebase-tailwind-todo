import firebase from "firebase/app";
// import "firebase/auth";
import "firebase/analytics";
import "firebase/database";

const firebaseConfig = {
  apiKey: "YOUR_API",
  authDomain: "YOUR_AUTHDOMAIN",
  databaseURL: "YOUR_URLDB",
  projectId: "YOUR_PROJECTNAME",
  storageBucket: "YOUR_STORAGE",
  messagingSenderId: "YOUR_IDSENDER",
  appId: "YOUR_APPID",
  measurementId: "YOUR_MEASUREMENTID",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const database = firebase.database();

export default firebase;
