import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxJCXD9s6h5zi0CVHXDvcye6dCodBxGQo",
  authDomain: "pvb723enkeltjezelfstandig.firebaseapp.com",
  databaseURL: "https://pvb723enkeltjezelfstandig-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pvb723enkeltjezelfstandig",
  storageBucket: "pvb723enkeltjezelfstandig.appspot.com",
  messagingSenderId: "934487190600",
  appId: "1:934487190600:web:225e40d5eb873920213c7d",
  measurementId: "G-0YTY2M4TQB"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
