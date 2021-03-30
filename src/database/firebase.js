import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STOARGE_BUCKET,
  REACT_APP__FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP__FIREBASE_APP_ID,
} = process.env;

const firebaseConfig = {
  // Your web app's Firebase configuration

  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STOARGE_BUCKET,
  messagingSenderId: REACT_APP__FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP__FIREBASE_APP_ID,

  // Your web app's Firebase configuration

  // apiKey: "AIzaSyDTqGgT_1V9VEM13a2uTBltZg5YLqusoaI",
  // authDomain: "events-reminder-83889.firebaseapp.com",
  // projectId: "events-reminder-83889",
  // storageBucket: "events-reminder-83889.appspot.com",
  // messagingSenderId: "1056676186358",
  // appId: "1:1056676186358:web:ae82e054ad50bb3a39c4d7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
