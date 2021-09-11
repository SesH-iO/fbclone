import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAXk6hIFCXQDaVCE28NIH5PX-FnbVxe1hU',
  authDomain: 'fbclone-b3cc4.firebaseapp.com',
  projectId: 'fbclone-b3cc4',
  storageBucket: 'fbclone-b3cc4.appspot.com',
  messagingSenderId: '171778166363',
  appId: '1:171778166363:web:3cce393bed90d1266c797e',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
