import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDo03j7Nq72aqQbXQQV3EDPbIYJm9bLK18",
  authDomain: "chatapp-7f5aa.firebaseapp.com",
  projectId: "chatapp-7f5aa",
  storageBucket: "chatapp-7f5aa.appspot.com",
  messagingSenderId: "85389649485",
  appId: "1:85389649485:web:cf1686f33db0c40b071e04",
  measurementId: "G-05MS3ZB0YC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
