// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzCQIjHn3PpxnGPtxSKwYENyiGCDCN0bY",
  authDomain: "login-admin-system.firebaseapp.com",
  projectId: "login-admin-system",
  storageBucket: "login-admin-system.appspot.com",
  messagingSenderId: "862023470797",
  appId: "1:862023470797:web:5012828cb31d029b7d6384"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default app 