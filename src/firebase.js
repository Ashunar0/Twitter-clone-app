// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPgdszax0c0ErkpraJeCbnJaD_RNDbE9M",
  authDomain: "my-project-6d796.firebaseapp.com",
  projectId: "my-project-6d796",
  storageBucket: "my-project-6d796.firebasestorage.app",
  messagingSenderId: "201657660655",
  appId: "1:201657660655:web:056f3edb2e44791edb571a",
  measurementId: "G-J5ZZY952GQ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, analytics, auth };
