import * as firebase from 'firebase'


// Initialize Firebase
var config = {
    apiKey: "AIzaSyBCQ61nPEj47L8aLozRxWdOVL7_gUIMyzE",
    authDomain: "syedharis.firebaseapp.com",
    databaseURL: "https://syedharis.firebaseio.com",
    projectId: "firebase-syedharis",
    storageBucket: "firebase-syedharis.appspot.com",
    messagingSenderId: "777955369806"
  };
  firebase.initializeApp(config);


export const ref = firebase.database().ref()
export const auth = firebase.auth
export const database = firebase.database();
export const provider = new firebase.auth.FacebookAuthProvider();