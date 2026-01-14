alert("app.js loaded");
// Import Firebase core
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "chat-app-a4c5f.firebaseapp.com",
  projectId: "chat-app-a4c5f",
  storageBucket: "chat-app-a4c5f.appspot.com",
  messagingSenderId: "897184775926",
  appId: "1:897184775926:web:8348fbc8da33a1325f76d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);

