import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'fbclone-b3cc4.firebaseapp.com',
  projectId: 'fbclone-b3cc4',
  storageBucket: 'fbclone-b3cc4.appspot.com',
  messagingSenderId: '171778166363',
  appId: process.env.FIRBASE_APP_ID,
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
