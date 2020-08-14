import * as firebase from "firebase/app";
import "firebase/auth";


var firebaseConfig = {
    apiKey: "AIzaSyCTl2KzkCw8znz34TQ1SJ5ZWtpEpHvzNiU",
    authDomain: "bootcamp-98a98.firebaseapp.com",
    databaseURL: "https://bootcamp-98a98.firebaseio.com",
    projectId: "bootcamp-98a98",
    storageBucket: "bootcamp-98a98.appspot.com",
    messagingSenderId: "462828527482",
    appId: "1:462828527482:web:4e782e8afe21a7257980c3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();