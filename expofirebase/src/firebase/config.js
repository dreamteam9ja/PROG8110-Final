import firebase from "firebase";
import "@firebase/auth";
import "@firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBLNIla5bMVNtwBECLQ-uhwWZhzkhN6gws",
  authDomain: "prog8110-adaf3.firebaseapp.com",
  databaseURL: "https://prog8110-adaf3-default-rtdb.firebaseio.com",
  projectId: "prog8110-adaf3",
  storageBucket: "prog8110-adaf3.appspot.com",
  messagingSenderId: "350319766791",
  appId: "1:350319766791:web:110bb7b93dffa5da4769a2",
  measurementId: "G-4MZ0TG111D",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
