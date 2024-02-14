import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsZBQrPe5jweDSsbgyKcIMwmoqW12OT7Q",
  authDomain: "clone-b7365.firebaseapp.com",
  projectId: "clone-b7365",
  storageBucket: "clone-b7365.appspot.com",
  messagingSenderId: "529344223038",
  appId: "1:529344223038:web:8f7a72dc560c758a707e6f",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();



