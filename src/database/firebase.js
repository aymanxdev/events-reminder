import firebase from "firebase";
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
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
