// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyB3OaSgaA_dKpsJbQBOWSN6uJL9-Ng0evw",
  authDomain: "swaadhar-75cce.firebaseapp.com",
  projectId: "swaadhar-75cce",
  storageBucket: "swaadhar-75cce.appspot.com",
  messagingSenderId: "871030660710",
  appId: "1:871030660710:web:02e94bcfb2c07e80e617a7"
};


// Firebase storage reference
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
// Initialize Firebase
// export const Storage = getStorage(app);
