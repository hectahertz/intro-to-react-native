import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: '<YOUR-API-KEY>',
  authDomain: '<YOUR-AUTH-DOMAIN>',
  databaseURL: '<YOUR-DATABASE-URL>',
  storageBucket: '<YOUR-STORAGE-BUCKET>'
};

firebase.initializeApp(firebaseConfig);

export default firebase;
