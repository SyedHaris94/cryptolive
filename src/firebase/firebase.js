import * as firebase from 'firebase'


// Initialize Firebase
var config = {
  apiKey: "AIzaSyAI0W_czA_vaVS1ZinRWMADP6Qe8NRWMX0",
  authDomain: "table-generator-a48ca.firebaseapp.com",
  databaseURL: "https://table-generator-a48ca.firebaseio.com",
  projectId: "table-generator-a48ca",
  storageBucket: "table-generator-a48ca.appspot.com",
  messagingSenderId: "926481544579"
};
firebase.initializeApp(config);


// export const ref = firebase.database().ref()
export const auth = firebase.auth();
export const database = firebase.database();
export const provider = new firebase.auth.FacebookAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
