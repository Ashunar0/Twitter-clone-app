// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPgdszax0c0ErkpraJeCbnJaD_RNDbE9M",
  authDomain: "my-project-6d796.firebaseapp.com",
  projectId: "my-project-6d796",
  storageBucket: "my-project-6d796.firebasestorage.app",
  messagingSenderId: "201657660655",
  appId: "1:201657660655:web:056f3edb2e44791edb571a",
  measurementId: "G-J5ZZY952GQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };
