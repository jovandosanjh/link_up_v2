// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ you need this to access auth

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDaJFSL5TBkOIvfqwOFkvaC1VkOZEv5HtE",
  authDomain: "linkup-v2222.firebaseapp.com",
  projectId: "linkup-v2222",
  storageBucket: "linkup-v2222.firebasestorage.app",
  messagingSenderId: "355036676902",
  appId: "1:355036676902:web:bda7c1bad2f0ab40a4b7e7"
};

// Initialize Firebase and Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // ✅ initialize auth with the app

export { auth }; // ✅ export it so login.js can use it
