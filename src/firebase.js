// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {Firestore, getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXUddMgYmhZYl9exNvg8OwaysfEv5yG5Q",
  authDomain: "realtor-clone-proj.firebaseapp.com",
  projectId: "realtor-clone-proj",
  storageBucket: "realtor-clone-proj.appspot.com",
  messagingSenderId: "1096354804241",
  appId: "1:1096354804241:web:8fe8fd7fc6d73e110d37b0",
  measurementId: "G-E7LKMQJP9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore() 