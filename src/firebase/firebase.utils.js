import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD0Jv9-6OGnzHA5SEMQCBxWZ4iWUdeiYXg",
    authDomain: "crwn-db-d271d.firebaseapp.com",
    projectId: "crwn-db-d271d",
    storageBucket: "crwn-db-d271d.appspot.com",
    messagingSenderId: "739354537127",
    appId: "1:739354537127:web:bcef508ac5859fdb933f82"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
