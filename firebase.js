// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh3Eev5DyrZSnyYoMJeQ39VvJmKhAth6w",
  authDomain: "tinder-clone3-a2d20.firebaseapp.com",
  projectId: "tinder-clone3-a2d20",
  storageBucket: "tinder-clone3-a2d20.appspot.com",
  messagingSenderId: "961847064161",
  appId: "1:961847064161:web:84531f645de9706f241c20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
