// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nexbuy-e-commerse.firebaseapp.com",
  projectId: "nexbuy-e-commerse",
  storageBucket: "nexbuy-e-commerse.firebasestorage.app",
  messagingSenderId: "451907460721",
  appId: "1:451907460721:web:5f6027d4664c501d43c5d0",
  measurementId: "G-P4KPTG5EN9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
