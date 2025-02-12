// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth for authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzyFe2-Plyop_EQRjoTDepN7fiRjVTlB8",
  authDomain: "smart-parking-1e8a7.firebaseapp.com",
  projectId: "smart-parking-1e8a7",
  storageBucket: "smart-parking-1e8a7.firebasestorage.app",
  messagingSenderId: "544615403073",
  appId: "1:544615403073:web:46c380fe7609b5dfb3c0c0",
  measurementId: "G-287VPKTV2V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Export auth for use in your app
export default app;
