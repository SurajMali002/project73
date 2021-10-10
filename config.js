import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBhiVuQEE48xHMAbm20sUCxtZ4TJkHWdX0",
  authDomain: "project73-e5290.firebaseapp.com",
  projectId: "project73-e5290",
  storageBucket: "project73-e5290.appspot.com",
  messagingSenderId: "601475785169",
  appId: "1:601475785169:web:c45b20caa84f128b9240f0"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

