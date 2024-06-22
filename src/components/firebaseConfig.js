// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALfqNz7PdFCp7RxKcqr7DRXe43b6lv7VE",
  authDomain: "dardotpverification.firebaseapp.com",
  projectId: "dardotpverification",
  storageBucket: "dardotpverification.appspot.com",
  messagingSenderId: "672157470167",
  appId: "1:672157470167:web:583432785c6459b3870f92",
  measurementId: "G-VV0SC1R0PE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;