import firebase from "firebase";
import "@firebase/auth";
import "@firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD6_EVsnfgvbCWmGVCbsaanAQy_zGEHl_o",
  authDomain: "firebasics-21d81.firebaseapp.com",
  projectId: "firebasics-21d81",
  storageBucket: "firebasics-21d81.appspot.com",
  messagingSenderId: "546546656768",
  appId: "1:546546656768:web:c2f58582299baa26595ae5",
  measurementId: "G-MZQD29QTV2",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
