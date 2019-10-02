import firebase from 'firebase';
// const settings = {timestampsInSnapshots: true};
var Config = {
    apiKey: "AIzaSyA6tzN6YI3xHrmhhXkDPUFV_QaR5WZcy3A",
    authDomain: "example-firestore-178f8.firebaseapp.com",
    databaseURL: "https://example-firestore-178f8.firebaseio.com",
    projectId: "example-firestore-178f8",
    storageBucket: "example-firestore-178f8.appspot.com",
    messagingSenderId: "608484062826",
    appId: "1:608484062826:web:c462d7811dfda90d577c13",
    measurementId: "G-7556NW49YM"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);


// firebase.firestore().settings(settings);
export default firebase;