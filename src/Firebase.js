// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCoTex7fUK6FSchBgksn0W8VwpYkl9aULo",
  authDomain: "swaadhar-ee1ec.firebaseapp.com",
  projectId: "swaadhar-ee1ec",
  storageBucket: "swaadhar-ee1ec.appspot.com",
  messagingSenderId: "839229087426",
  appId: "1:839229087426:web:0c8ca430554c68b11da55b",
  measurementId: "G-7NZ0MH6C0L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app)
const firestore = getFirestore(app)
export { app, auth, storage, firestore };