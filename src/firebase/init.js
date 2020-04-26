
  import firebase from 'firebase'
  import firestore from 'firebase/firestore'
  var firebaseConfig = {
    apiKey: "AIzaSyCUR4fH6cGH6SyF4Kj4-8oHNYtW5e01t7o",
    authDomain: "realtime-chat-c226c.firebaseapp.com",
    databaseURL: "https://realtime-chat-c226c.firebaseio.com",
    projectId: "realtime-chat-c226c",
    storageBucket: "realtime-chat-c226c.appspot.com",
    messagingSenderId: "1049547197798",
    appId: "1:1049547197798:web:788f0429a199c968420ca7",
    measurementId: "G-5GZ8DDT6VB"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({timestampsInSnapshots:true})

export default firebaseApp.firestore()