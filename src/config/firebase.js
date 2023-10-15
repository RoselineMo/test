// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx7Qlh9jHLNN2x48NPj-B23hG06iV5xTY",
  authDomain: "test-roselinemo.firebaseapp.com",
  projectId: "test-roselinemo",
  storageBucket: "test-roselinemo.appspot.com",
  messagingSenderId: "278579086002",
  appId: "1:278579086002:web:c7da0c906dbc750ac43fab",
  measurementId: "G-BZ1BRLYF1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);