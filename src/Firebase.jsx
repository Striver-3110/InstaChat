// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_mMNazO4NqUFKpZs3BLYfokSUQeBwSXk",
  authDomain: "instantchat-c2f9a.firebaseapp.com",
  projectId: "instantchat-c2f9a",
  storageBucket: "instantchat-c2f9a.appspot.com",
  messagingSenderId: "662187065925",
  appId: "1:662187065925:web:c7f6c44e389826f2a2d92c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)