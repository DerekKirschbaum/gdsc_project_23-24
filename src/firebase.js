// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaC_x5dDaGjJVcqVSU4T2ec4Fxm7i5mnE",
  authDomain: "gdsc-project-23-24.firebaseapp.com",
  projectId: "gdsc-project-23-24",
  storageBucket: "gdsc-project-23-24.appspot.com",
  messagingSenderId: "512229308168",
  appId: "1:512229308168:web:2094cddf8b0eae494d9ebd",
  measurementId: "G-25XMF7CNEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
