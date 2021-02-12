import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDKnu8UwHs6McFHbQSGI7lqT06RkhLOgB4",
    authDomain: "to-do-react-js.firebaseapp.com",
    projectId: "to-do-react-js",
    storageBucket: "to-do-react-js.appspot.com",
    messagingSenderId: "360820096768",
    appId: "1:360820096768:web:f2fa581e0bb35daaaf7de5"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {db};