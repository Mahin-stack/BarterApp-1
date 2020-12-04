import firebase from 'firebase';
require ('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBlfAlmqdgpnnX3UGZLmFuRPl3pmFSVao8",
    authDomain: "barterapp-d10d2.firebaseapp.com",
    projectId: "barterapp-d10d2",
    storageBucket: "barterapp-d10d2.appspot.com",
    messagingSenderId: "190695515717",
    appId: "1:190695515717:web:5b61b08166d3744f09e52c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();